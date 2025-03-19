const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "unesc",
        database: "crud"
    });
    
    connection.connect((err) => {
        if(err) {
            console.log("Erro ao conectar o banco");
            return;
        }
        console.log("Banco conectado!");
    });

module.exports = connection;