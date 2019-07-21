import fatch from '@/utils/fatch.js'

export function getGoodsData (id) {
  return fatch.post('/goods', { id: id })
}
