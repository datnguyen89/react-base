import axiosClient from './axiosClient';
import { REQUEST_BUILDER } from '../constant';
import config from '../config';

const request = (method) => ({
                               url,
                               baseUrl = config.apiUrl,
                               data,
                               params,
                               disabledLoading = false,
                               disableAutoError = false,
                               customHeaders = {},
                               refreshToken = true,
                             }) => {
  const options = {
    baseURL: baseUrl,
    url,
    method,
    ...(data && { data }),
    ...(params && { params }),
    disabledLoading,
    disableAutoError,
    refreshToken, // Thêm vào options gửi đi
    customHeaders: {
      'x-request-id': 'xxx', // Header mặc định
      ...customHeaders, // Header tùy chỉnh nếu có
    },
  };

  return axiosClient(options);
};

// Export các method HTTP
export default {
  get: request(REQUEST_BUILDER.GET),
  post: request(REQUEST_BUILDER.POST),
  delete: request(REQUEST_BUILDER.DELETE),
  put: request(REQUEST_BUILDER.PUT),
};
