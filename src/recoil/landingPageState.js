import { atom, selector } from 'recoil'

export const provinceState = atom({
  key: 'provinceState',
  default: [],
})
export const districtState = atom({
  key: 'districtState',
  default: [],
})
export const wardsState = atom({
  key: 'wardsState',
  default: [],
})
export const branchState = atom({
  key: 'branchState',
  default: [],
})