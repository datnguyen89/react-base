import { atom } from 'recoil'
import { localStorageEffect } from './recoilHelper'

export const collapsedState = atom({
  key: 'collapsedState',
  default: false,
  effects: [
    localStorageEffect('collapsedState'),
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
