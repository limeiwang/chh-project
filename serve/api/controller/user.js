const e = require('express');
const user = require('../model/user');

const login = async (req, res, next) => {
    const {
        name,
        password
    } = req.body;
    
    // 获取用户信息
    let userInfo = await user.selectUser({name, password});
    //执行登录
    console.log(userInfo);
    if (userInfo.length > 0) {
        res.json({
            code: 0,
            msg: '登录成功'
        })
    }else {
        res.json({
            code: 1,
            msg: '登录失败，账号或密码错误！'
        })
    }
}

module.exports = {
    login
}