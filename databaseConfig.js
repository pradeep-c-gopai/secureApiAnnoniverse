const mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Metaverse@2023",
    database: 'anonyverse'
});

module.exports = { db };