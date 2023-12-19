// models/exampleModel.js
const connect = require('../connect');

const UserinfoModel = {
    getAllUsers: (callback) => {
        connect.query('SELECT * FROM userinfo', (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results);
        });
    },
    // Add more CRUD operations as needed
};


module.exports = UserinfoModel;
