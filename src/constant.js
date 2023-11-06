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
export const DEVICE = {
  MOBILE: 'MOBILE', // width <= 425
  TABLET: 'TABLET', // 426 <= width <= 768
  LAPTOP: 'LAPTOP', // 769 <= width <= 1199
  DESKTOP: 'DESKTOP', // width >= 1200
}
// endregion
