const e = require('express');
const shopping = require('../model/shopping.js');

const list = async (req, res, next) => {
    const {pageIndex, pageSize} = req.body;
    let result = await shopping.selectList({pageIndex, pageSize});
    if (result.length) {
        res.json({
            code: 0,
            msg: 'success',
            data: result
        })
    } else {
        res.json({
            code: 1,
            msg: 'error',
            data: []
        });
    }
}

const add = async (req, res, next) => {
    console.log(req.body);
    let result = await shopping.addList(req.body);
    if (result) {
        res.json({
            code: 0,
            msg: '操作成功',
            data: result
        })
    } else {
        res.json({
            code: 1,
            msg: '操作失败',
            data: []
        });
    }
}

const del = async (req, res, next) => {
    console.log(req.query);
    let result = await shopping.delList(req.query);
    if (result) {
        res.json({
            code: 0,
            msg: '操作成功',
            data: result
        })
    } else {
        res.json({
            code: 1,
            msg: '操作失败',
            data: []
        });
    }
}

module.exports = {
    list,
    add,
    del
}