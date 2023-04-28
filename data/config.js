const mysql = require('mysql');

//set database connection credentials
const config ={
    host:'localhost',
    user:'root',
    password: 'root',
    database: 'api',
};

//create a MySQL pool
const pool= mysql.createPool(config);

//export the pool
module.exports=pool;