import { atom } from 'recoil'
import { localStorageEffect } from './recoilHelper'
import { DEVICE } from '../constant'

export const collapsedState = atom({
  key: 'collapsedState',
  default: false,
  effects: [
    localStorageEffect('collapsedState'),
  ],
})

export const languageState = atom({
  key: 'languageState',
  default: 'vi',
  effects: [
    localStorageEffect('languageState'),
  ],
})

export const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: false,
  effects: [
    localStorageEffect('isDarkModeState'),
  ],
})

export const appLoadingState = atom({
  key: 'appLoadingState',
  default: 0,
})

export const deviceState = atom({
  key: 'deviceState',
  default: DEVICE.DESKTOP,
})
export const currentPageState = atom({
  key: 'currentPageState',
  default: null,
})