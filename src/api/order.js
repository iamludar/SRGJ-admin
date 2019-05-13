import request from '@/utils/request'

export function orderList(query) {
  return request({
    url: '/order/list?_format=json',
    method: 'get',
    params: query
  })
}

export function orderTotal(query) {
  return request({
    url: '/order/list?_format=json',
    method: 'get',
    params: query
  })
}
