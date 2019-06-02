import request from '@/utils/request'

export function getPreCode() {
  return request({
    url: '/shouquan/getpreauthcode',
    method: 'get'
  })
}