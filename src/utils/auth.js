import Cookies from 'js-cookie'

const TokenKey = 'Authorization'

export function getToken() {
  // return Cookies.get(TokenKey)
  return localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
