import request from '../requests/request'
import { setRecoil } from 'recoil-nexus'
import { districtState, provinceState, wardsState } from '../recoil/landingPageState'
import config from '../config'

const landingPageStore = {
  getProvince: () => {
    return new Promise((resolve, reject) => {
      const url = '/catalog/province'
      request.get({
        url,
        baseUrl: config.apiUrl,
        params: null,
        disabledLoading: false,
        disableAutoError: true,
      })
        .then(res => {
          if (res) {
            setRecoil(provinceState, res?.data)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getDistrict: (provinceId) => {
    return new Promise((resolve, reject) => {
      const url = `/catalog/district`
      request.get({
        url,
        baseUrl: config.apiUrl,
        params: { provinceId: provinceId },
        disabledLoading: false,
        disableAutoError: true,
      })
        .then(res => {
          if (res) {
            setRecoil(districtState, res?.data)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getWard: (districtId) => {
    return new Promise((resolve, reject) => {
      const url = `/catalog/ward`
      request.get({
        url,
        baseUrl: config.apiUrl,
        params: { districtId: districtId },
        disabledLoading: false,
        disableAutoError: true,
      })
        .then(res => {
          if (res) {
            setRecoil(wardsState, res?.data)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  checkEsb: (params) => {
    return new Promise((resolve, reject) => {
      const url = `/station/check/esb`
      request.get({
        url,
        baseUrl: config.apiUrl,
        params: params,
        disabledLoading: false,
        disableAutoError: false,
      })
        .then(res => {
          if (res) {

          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  registerDigital: (data) => {
    return new Promise((resolve, reject) => {
      const url = `/station/campain/digital`
      request.post({
        url,
        baseUrl: config.apiUrl,
        data: data,
        disabledLoading: false,
        disableAutoError: false,
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  registerBusiness: (data) => {
    return new Promise((resolve, reject) => {
      const url = `/station/campain/business`
      request.post({
        url,
        baseUrl: config.apiUrl,
        data: data,
        disabledLoading: false,
        disableAutoError: false,
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  registerFinance: (data) => {
    return new Promise((resolve, reject) => {
      const url = `/station/campain/finance`
      request.post({
        url,
        baseUrl: config.apiUrl,
        data: data,
        disabledLoading: false,
        disableAutoError: false,
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getServiceCare: (params) => {
    return new Promise((resolve, reject) => {
      const url = `/ldp/service`
      request.get({
        url,
        baseUrl: config.apiUrl,
        params: params,
        disabledLoading: false,
        disableAutoError: false,
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getProductCare: (params) => {
    return new Promise((resolve, reject) => {
      const url = `/ldp/product`
      request.get({
        url,
        baseUrl: config.apiUrl,
        params: params,
        disabledLoading: false,
        disableAutoError: false,
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}
export default landingPageStore