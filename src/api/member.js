import request from '@/utils/request'

export function memberList(query) {
  return request({
    url: '/wechatuserlist?_format=json',
    method: 'get',
    params: query
  })
}

export function memberTotal(query) {
  return request({
    url: '/wechatuserlist?_format=json',
    method: 'get',
    params: query
  })
}

export function updataMember(query) {
  return request({
    url: '/wechatuserlist?_format=json',
    method: 'get',
    params: query
  })
}
