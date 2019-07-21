import { Random } from 'mockjs'

function getRecipe (req) {
  // const parmas = JSON.parse(req.body).id
  const data = []
  for (let i = 0; i < 10; i += 1) {
    const o = {
      recipeId: Random.guid(),
      billId: Random.string(10),
      orgId: Random.string('number', 8, 10),
      viewName: Random.cword(4, 16), // 随机生成任意名称
      personName: Random.cname(),
      reason: Random.csentence(10, 32)
    }
    data.push(o)
  }
  // 返回响应数据对象
  return {
    code: 200,
    data: data
  }
}

export default {
  getRecipe
}
