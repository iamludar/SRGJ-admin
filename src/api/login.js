import request from '@/utils/request'

export function loginByUsername(name, pass) {
  const data = {
    name,
    pass
  }
  return request({
    url: '/user/login?_format=json',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(uid) {
  return request({
    url: '/wechat/userinfo?uid=' + uid,
    method: 'get'
  })
}

