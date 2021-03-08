var conf = require('../../config/db.js');

const selectUser = (option) => {
    const {name, password} = option;
    const sql = 'select * from user where username=? and password=?';
    return new Promise((resolve, reject) => {
        conf.query(sql, [name, password], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    selectUser
}