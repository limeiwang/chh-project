var conf = require('../../config/db.js');

const selectList = (option) => {
    const {pageIndex, pageSize} = option;
    const sql = 'select * from purchase limit ?,?';
    return new Promise((resolve, reject) => {
        conf.query(sql, [pageIndex, pageSize], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const addList = (option) => {
    const {
        code, type, name, supplier, spec, count, price
      } = option;
    const sql = 'insert into purchase (code, type, name, supplier, spec, count, price) values (?,?,?,?,?,?,?)';
    return new Promise((resolve, reject) => {
        conf.query(sql, [code, type, name, supplier, spec, count, price], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const delList = (option) => {
    const {id} = option;
    const sql = 'delete from purchase where id=?';
    return new Promise((resolve, reject) => {
        conf.query(sql, [id], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    selectList,
    addList,
    delList
}