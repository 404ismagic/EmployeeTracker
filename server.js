// Import nessary compotents and packages

const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table'); 

// Make a connction to db and store in dbConn variable
const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tmtrocket",
    database: "AcsCompany_db"
});



// Function mainMenu allows user to specify what they can achieve with
// employeeTracker app at the top level.
function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'database_choice',
                choices: [
                    `view all department`,
                    `view all roles`,
                    `view all employees`,
                    `add a department`,
                    `add a role`,
                    `add an employee`,
                    `update an employee role`,],
            },
        ])
        .then((answer) => {
            if (answer.database_choice === `view all department`) {
                dbConn.query(`SELECT * FROM department`, (err, res) => {
                    err ? console.error(err) : console.table(res)
                    mainMenu()
                })
            }
            else if (answer.database_choice === `view all roles`) {
                dbConn.query(`SELECT * FROM roles`, (err, res) => {
                    err ? console.error(err) : console.table(res)
                    mainMenu()
                })
            }
            else if (answer.database_choice === `view all employees`) {
                dbConn.query(`SELECT * FROM employees`, (err, res) => {
                    err ? console.error(err) : console.table(res)
                    mainMenu()
                })
            }
            else if (answer.database_choice === `add a department`) {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'what would you like to name the new department?',
                            name: 'new_department',
                        },
    
                    ])
                    .then((answers) => {
                        dbConn.query(`INSERT INTO department (department_name) VALUES ("${answers.new_department}")`, (err, res) => {               
                            console.log(answers.new_department)
                            err ? console.error(err) : console.table(res)
                            mainMenu()
                        })
                    })
               
            }
            else if (answer.database_choice === `add a role`) {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'what would you like to name the new role?',
                            name: 'new_role',
                        },
                        {
                            type: 'input',
                            message: 'what department is this new role in?',
                            name: 'department_id',
                        },
                        {
                            type: 'input',
                            message: 'what is the salary for the new role?',
                            name: 'salary',
                        },
    
                    ])
                    .then((answers) => {
                        dbConn.query(`INSERT INTO roles (title, department_id, salary) VALUES ("${answers.new_role}", "${answers.department_id}", "${answers.salary}")`, (err, res) => {
                            err ? console.error(err) : console.table(res)
                            mainMenu()
                        })
                    })
            }
            else if (answer.database_choice === `add an employee`) {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'what is the first name of the new employee?',
                            name: 'first_name',
                        },
                        {
                            type: 'input',
                            message: 'what is the last name of the new employee?',
                            name: 'last_name',
                        },
                        {
                            type: 'input',
                            message: 'what is the role/job title of the new employee?',
                            name: 'role_id',
                        },
                        {
                            type: 'input',
                            message: 'who is the manager of the new employee?',
                            name: 'manager_id',
                        },
    
                    ])
                    .then((answers) => {
                        dbConn.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.manager_id})`, (err, res) => { 
                            err ? console.error(err) : console.table(res)
                            mainMenu()
                        })
                    })
            }
            else if (answer.database_choice === `update an employee role`) {
                inquirer
                    .prompt([
                        {
                            type:'input',
                            message:'what is the id of the employee you wish to change?',
                            name:'employee_id'
                        },
                        {
                            type:'input',
                            message:'what is the role you would like to change the employee to?',
                            name:'changing_role'
                        },
                    ])
                    .then((answers) => {
                        
                        dbConn.query(`UPDATE employees set role_id = ${answers.changing_role} WHERE id = ${answers.employee_id}`), (err, res) => { 
                            err ? console.error(err) : console.table(res)
                        }
                        mainMenu()
                
                    })
            }
           
        })
    }
    mainMenu()