// deviceUtils.js
import { UAParser } from 'ua-parser-js'

export async function getClientInfo() {
  try {
    const ipResponse = await fetch('https://ipwho.is/')
    const ipData = await ipResponse.json()

    const parser = new UAParser()
    const result = parser.getResult()

    return {
      ip: ipData.ip,
      location: {
        city: ipData.city,
        country: ipData.country,
      },
      browser: {
        name: result.browser.name,
        version: result.browser.version,
      },
      os: {
        name: result.os.name,
        version: result.os.version,
      },
      device: {
        type: result.device.type || 'desktop',
        model: result.device.model || 'unknown',
        vendor: result.device.vendor || 'unknown',
      },
    }
  } catch (error) {
    console.error('Error getting client info:', error)
    return null
  }
}
