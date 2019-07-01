import request from '@/utils/request'

export function dataList(query) {
  return request({
    url: '/wechat/frontdata',
    method: 'get',
    params: query
  })
}
