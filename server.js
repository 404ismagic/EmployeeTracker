const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table'); 

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tmtrocket",
    database: "AcsCompany_db"
});

