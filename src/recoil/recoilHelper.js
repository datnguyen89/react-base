
export const localStorageEffect = key => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(decodeURI(atob(savedValue))))
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, btoa(encodeURI(JSON.stringify(newValue))))
  })
}
