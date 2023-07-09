const mysql = require('mysql');
const {promisify} = require('util');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'lista_tareas'
});

db.getConnection((err, con)=>{
    if(err){
        console.log(err);
    };
    con.release();
    console.log('db conectada')
});

db.query = promisify(db.query);



module.exports = db;