const user = require('../model/user');

const login = async (req, res, next) => {
    console.log(req);
    const {
        name,
        password
    } = req.body;
    
    // 获取用户信息
    let userInfo = await user.selectUser({phone});
    //执行登录
    res.json({
        code: 200,
        msg: '登录成功'
    })
}

module.exports = {
    login
}