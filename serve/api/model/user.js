var conf = require('../../config/db.js');

const selectUser = (option) => {
    const sql = 'select * from user where ' + Object.keys(options)[0] + '=' + Object.values(options)[0];
    return new Promise((resolve, reject) => {
        conf.query(sql, [], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve({ ...data[0] })
            }
        })
    })
}

module.exports = {
    selectUser
}