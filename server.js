const express = require('express')
const mysql = require('mysql');

const app = express();
app.use(express.json());

// MySQL Connection
const connection = mysql.createConnection({
    host: '...',
    user: '...',
    password: '...',
    database: '...',
    port: '3306'

})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})


// READ
app.get("/read", async (req, res) => {
    try {
        connection.query("SELECT * FROM userinfo", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.listen(3000, () => console.log('Server is running on port 3000'));