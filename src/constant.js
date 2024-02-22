// region Website config
export const MAIN_SIDEBAR_EXTEND_WIDTH = 256
export const MAIN_SIDEBAR_COLLAPSE_WIDTH = 64
export const MAIN_SIDEBAR_DRAWER_WIDTH = 256
export const MAIN_HEADER_HEIGHT = 64
export const APP_NAME = 'validus'
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const PAGES = {
  LOGIN: {
    PATH: '/login',
    NAME: 'login',
  },

  HOME: {
    PATH: '/',
    NAME: 'home',
  },
  ABOUT_US: {
    PATH: '/about-us',
    NAME: 'about-us',
  },
  TEST: {
    PATH: '/test',
    NAME: 'test',
  },
}

export const RESPONSE_CODE = {
  SUCCESS: 1, // Thành công
}

export const THEME = {
  PRIMARY_COLOR: '#765de6',
  COMPONENT_COLOR: '#765de6',
  BORDER_RADIUS: 4,
}
export const BREAKPOINT = {
  XS: 'XS', // width < 576
  SM: 'SM', // 576 <= width < 768
  MD: 'MD', // 768 <= width < 992
  LG: 'LG', // 992 <= width < 1200
  XL: 'XL', // 1200 <= width < 1600
  XXL: 'XXL', // width >= 1600
}
// endregion
