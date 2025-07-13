const mysql = require("mysql2");
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_mvc"
});

db.connect((error)=>{
    if (error) {
        console.log("Error conectando a MYSQL: ",error);
        return
    }
    console.log("Conectando a la base datos MYSQL");
})

module.exports = db;