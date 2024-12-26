import axios from 'axios';
import config from '../config';
import history from '../customRouter/history';
import { notification } from 'antd';
import queryString from 'query-string';
import { getRecoil, setRecoil } from 'recoil-nexus';
import { appLoadingState } from '../recoil/commonState';
import { PAGES, RESPONSE_CODE } from '../constant';
import { accessTokenState } from '../recoil/authenticationState';

// Utility functions
const handleLoading = (config, delta) => {
  if (!config?.disabledLoading) {
    setRecoil(appLoadingState, (appLoading) => Math.max(appLoading + delta, 0));
  }
};

const handleError = (error) => {
  const { response } = error;

  if (!response?.config?.disableAutoError) {
    notification.error({
      message: 'Thông báo',
      description: response?.data?.message || error.message,
    });
  }
};

// Refresh token logic
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    token ? prom.resolve(token) : prom.reject(error);
  });
  failedQueue = [];
};

const refreshToken = async () => {
  try {
    const response = await axios.post(`${config.apiUrl}/refresh-token`, {
      token: getRecoil(accessTokenState),
    });
    const newToken = response.data?.accessToken;
    setRecoil(accessTokenState, newToken);
    return newToken;
  } catch (error) {
    processQueue(error);
    throw error;
  }
};

// Create axios instance
const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (request) => {
    const accessToken = getRecoil(accessTokenState);
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (request?.customHeaders) {
      request.headers = { ...request.headers, ...request.customHeaders };
    }

    handleLoading(request, 1);
    return request;
  },
  (error) => {
    handleLoading(error.config, -1);
    return Promise.reject(error);
  }
);

// Response interceptor
const handleUnauthorized = (response) => {
  const originalRequest = response.config;
  if (originalRequest?.refreshToken) {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshToken()
        .then((newToken) => {
          processQueue(null, newToken);
          isRefreshing = false;
        })
        .catch((error) => {
          processQueue(error);
          isRefreshing = false;
          notification.error({
            message: 'Thông báo',
            description: 'Phiên làm việc hết hạn',
          });
          history.push(PAGES.LOGIN.PATH);
        });
    }

    return new Promise((resolve, reject) => {
      failedQueue.push({
        resolve: (token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(axiosClient(originalRequest));
        },
        reject: (err) => reject(err),
      });
    });
  } else {
    notification.error({
      message: 'Thông báo',
      description: 'Phiên làm việc hết hạn',
    });
    history.push(PAGES.LOGIN.PATH);
  }
};

axiosClient.interceptors.response.use(
  (response) => {
    handleLoading(response.config, -1);
    const { statusCode, message } = response?.data || {};

    switch (statusCode) {
      case RESPONSE_CODE.SUCCESS:
        break;
      case RESPONSE_CODE.UN_AUTHORIZE:
        return handleUnauthorized(response);
      default:
        if (!response.config?.disableAutoError) {
          notification.error({
            message: 'Thông báo',
            description: message || 'Có lỗi xảy ra',
          });
        }
        break;
    }

    return response.data || response;
  },
  (error) => {
    const originalRequest = error.config;
    handleLoading(originalRequest, -1);

    if (error.response?.status === RESPONSE_CODE.UN_AUTHORIZE && originalRequest?.refreshToken) {
      return handleUnauthorized(error.response);
    }

    handleError(error);
    return Promise.reject(error);
  }
);

export default axiosClient;
