const merge = require('lodash/merge')

const appConfig = {
  all: {
    env: process.env.REACT_APP_ENV || process.env.NODE_ENV,
    apiUrl: process.env.REACT_APP_API_URL,
  },
  development: {
  },
  production: {
  },
}
const config = merge(appConfig.all, appConfig[appConfig.all.env])

export default config
