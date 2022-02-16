require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);
con.connect((err) =>{
    if(err) {
        throw err;
    }
    console.log("Anslutit till databasen!🥳");
    let sql = "SELECT id FROM Books";
    con.query(sql, (err, result)=> {
        if(err) {
            throw err;
        }
        console.log(result);
        con.end();

    });

});


console.log(process.env);