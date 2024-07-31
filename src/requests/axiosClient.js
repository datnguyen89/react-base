import axios from 'axios'
import config from '../config'
import history from '../customRouter/history'
import { notification } from 'antd'
import queryString from 'query-string'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { appLoadingState } from '../recoil/commonState'
import { PAGES, RESPONSE_CODE } from '../constant'
import { accessTokenState } from '../recoil/authenticationState'


const axiosClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {
    serialize: params => queryString.stringify(params),
  },
})
axiosClient.interceptors.request.use(
  request => {
    // region Authentication
    const accessToken = getRecoil(accessTokenState);
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    // endregion
    // region Headers
    if (request?.customHeaders) {
      request.headers = {
        ...request.headers,
        ...request.customHeaders
      }
    }
    // endregion
    // region Loading
    if (!request?.disabledLoading) {
      setRecoil(appLoadingState, (appLoading) => appLoading + 1)
    }
    // endregion
    return request
  },
  error => {
    // region Loading
    if (!error.config?.disabledLoading) {
      setRecoil(appLoadingState, (appLoading) => appLoading - 1)
    }
    // endregion
    return Promise.reject(error)
  },
)

axiosClient.interceptors.response.use(
  (response) => {
    // region Loading
    if (!response.config?.disabledLoading) {
      setRecoil(appLoadingState, (appLoading) => appLoading - 1)
    }
    // endregion

    switch (response?.data?.statusCode) {
      case RESPONSE_CODE.SUCCESS: // thành công
        break
      case RESPONSE_CODE.UN_AUTHORIZE: // Hết phiên
        notification.error({
          message: 'Thông báo',
          description: 'Phiên làm việc hết hạn',
        })
        break
      default:
        if (!response.config?.disableAutoError) {
          notification.error({
            message: 'Thông báo',
            description: response?.data?.message || 'Có lỗi xảy ra',
          })
        }
        break
    }

    if (response && response?.data) {
      return response.data
    }
    return response
  },
  (error) => {
    const originalRequest = error.config
    // region Loading
    if (!originalRequest?.disabledLoading) {
      setRecoil(appLoadingState, (appLoading) => appLoading - 1)
    }
    // endregion
    if (error instanceof axios.Cancel) {

    } else {
      switch (error?.response?.status) {
        case 401:
          // console.log(error)
          notification.error({
            message: 'Thông báo',
            description: error?.response?.data?.message || 'Phiên làm việc hết hạn',
          })
          break
        default:
          if (!originalRequest?.disableAutoError) {
            notification.error({
              message: 'Thông báo',
              description: error?.response?.data?.message || error?.message,
            })
          }
          break
      }
    }
    return Promise.reject(error)
  })

export default axiosClient