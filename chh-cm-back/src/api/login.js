import fetch from '@/utils/fetch.js'
// class Login {
//   login (params) {
//     return fetch.post('login', params)
//   }
// }
// export default new Login()

export function login (params) {
  return fetch.post('/login', params)
}
