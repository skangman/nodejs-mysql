const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '203.159.94.145',
    user: 'blockbui',
    password: 'GuD(DsjP!6194y',
    database: 'blockbui_pmall_maindata',
    port: '3306'
});


connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})


module.exports = connection;


