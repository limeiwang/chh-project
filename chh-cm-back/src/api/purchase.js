import fetch from '@/utils/fetch.js'

export function add (params) {
  return fetch.post('/shopping/add', params)
}
export function list (params) {
  return fetch.post('/shopping/list', params)
}
export function del (params) {
  return fetch.get('/shopping/del', params)
}
