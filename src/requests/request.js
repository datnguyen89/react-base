import axiosClient from './axiosClient'
import { REQUEST_BUILDER } from '../constant'
import config from '../config'

const request = (method) => ({
                               url,
                               baseUrl = config.apiUrl,  // Sử dụng mặc định nếu không có baseUrl
                               data,
                               params,
                               disabledLoading = false,
                               disableAutoError = false,  // Mặc định là không tắt xử lý lỗi tự động
                               customHeaders = {},
                             }) => {
  const options = {
    baseURL: baseUrl,
    url,
    method,
    ...(data && { data }),
    ...(params && { params }),
    disabledLoading,
    disableAutoError,
    customHeaders: {
      'x-request-id': 'xxx',    // Giá trị mặc định cho request id
      ...customHeaders,         // Ghép thêm các header tùy chỉnh từ bên ngoài
    },
  };

  return axiosClient(options);
};

export default {
  get: request(REQUEST_BUILDER.GET),
  post: request(REQUEST_BUILDER.POST),
  delete: request(REQUEST_BUILDER.DELETE),
  put: request(REQUEST_BUILDER.PUT),
};
