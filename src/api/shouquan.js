import request from '@/utils/request'

export function getPreCode() {
  return request({
    url: '/wechat/getpreauthcode',
    method: 'get'
  })
}

export function getAuthUserinfo(query) {
  return request({
    url: '/wechat/getauthuserinfo',
    method: 'get',
    params: query
  })
}

export function authList() {
  return request({
    url: '/wechat/gongzhonghaolist',
    method: 'get'
  })
}
