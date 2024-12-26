// region Website config
export const MAIN_SIDEBAR_EXTEND_WIDTH = 256
export const MAIN_SIDEBAR_COLLAPSE_WIDTH = 64
export const MAIN_SIDEBAR_DRAWER_WIDTH = 256
export const MAIN_HEADER_HEIGHT = 64
export const APP_NAME = 'validus'
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const REQUEST_BUILDER = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
}
export const PAGES = {
  LOGIN: {
    PATH: '/login',
    NAME: 'login',
  },
  I18N: {
    PATH: '/i18n',
    NAME: 'i18n',
  },
  ABOUT_US: {
    PATH: '/about-us',
    NAME: 'about-us',
  },
  TEST: {
    PATH: '/test',
    NAME: 'test',
  },
  HOME: {
    PATH: '/',
    NAME: 'home',
  },
  LOOKUP_ACCOUNT: {
    PATH: '/chon-tai-khoan-so-dep',
    NAME: 'lookup-account',
  },
}

export const RESPONSE_CODE = {
  SUCCESS: 1, // Thành công
  UN_AUTHORIZE: 401
}

export const BREAKPOINT = {
  XS: 'XS', // width < 576
  SM: 'SM', // 576 <= width < 768
  MD: 'MD', // 768 <= width < 992
  LG: 'LG', // 992 <= width < 1200
  XL: 'XL', // 1200 <= width < 1600
  XXL: 'XXL', // width >= 1600
}
export const CONTAINER_WIDTH = {
  XXL: 80,
  XL: 80,
  LG: 80,
  MD: 90,
  SM: 100,
  XS: 100,
}
export const ERROR_COLOR = 'red'
export const ERROR_TITLE = 'Thông báo lỗi'
export const SUCCESS_TITLE = 'Thông báo'
export const SUCCESS_COLOR = '#52c41a'
export const INFO_COLOR = '#0465B0'
export const INFO_TITLE = 'Thông báo'
export const WARNING_COLOR = '#faad14'
export const WARNING_TITLE = 'Cảnh báo'
// endregion
