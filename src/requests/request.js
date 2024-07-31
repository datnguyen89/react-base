import axiosClient from './axiosClient'
import { REQUEST_BUILDER } from '../constant'
import config from '../config'

const request = {
  get: ({ url, baseUrl, params, disabledLoading, disableAutoError }) => {
    return axiosClient({
      baseURL: baseUrl || config.apiUrl,
      url: url,
      method: REQUEST_BUILDER.GET,
      ...(params && { params: params }),
      disabledLoading: disabledLoading,
      disableAutoError: disableAutoError,
      customHeaders: { 'x-request-id': 'xxx' },
    })
  },
  post: ({ url, baseUrl, data, disabledLoading, disableAutoError }) => {
    return axiosClient({
      baseURL: baseUrl || config.apiUrl,
      url: url,
      method: REQUEST_BUILDER.POST,
      ...(data && { data: data }),
      disabledLoading: disabledLoading,
      disableAutoError: disableAutoError,
      customHeaders: { 'x-request-id': 'xxx' },
    })
  },
  delete: ({ url, baseUrl, data, disabledLoading, disableAutoError }) => {
    return axiosClient({
      baseURL: baseUrl || config.apiUrl,
      url: url,
      method: REQUEST_BUILDER.DELETE,
      ...(data && { data: data }),
      disabledLoading: disabledLoading,
      disableAutoError: disableAutoError,
      customHeaders: { 'x-request-id': 'xxx' },
    })
  },
  put: ({ url, baseUrl, data, disabledLoading, disableAutoError }) => {
    return axiosClient({
      baseURL: baseUrl || config.apiUrl,
      url: url,
      method: REQUEST_BUILDER.PUT,
      ...(data && { data: data }),
      disabledLoading: disabledLoading,
      disableAutoError: disableAutoError,
      customHeaders: { 'x-request-id': 'xxx' },
    })
  },
}
export default request
