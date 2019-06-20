import request from '@/utils/request'

export function messageList(query) {
  return request({
    url: '/wechat/messagelist',
    method: 'get',
    params: query
  })
}

export function messageTotal(query) {
  return request({
    url: '/requestmessage?_format=json',
    method: 'get',
    params: query
  })
}
