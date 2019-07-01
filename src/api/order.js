import request from '@/utils/request'

export function orderList(query) {
  return request({
    url: '/wechat/orderlist',
    method: 'get',
    params: query
  })
}

