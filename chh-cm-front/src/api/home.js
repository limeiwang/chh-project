import fatch from '@/utils/fatch.js'

export function homeDataApi () {
  return fatch.post('/homedata')
}
