INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Hr"),
       ("Executive");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 3400, 1),
       ("Salesperson", 8700, 1),
       ("Lead Engineer", 99888, 2),
       ("Software Engineer", 98000, 2),
       ("Account Manager", 233992, 3),
       ("Accountant", 193042, 3),
       ("Legal Team Lead", 931100, 4),
       ("Lawyer", 230000, 4),
       ("Hr Director", 9000, 5),
       ("CEO", 500000, 6);
       
INSERT into employees (first_name, last_name, role_id, manager_id)
VALUES  ("Jake", "Freeman", 1, NULL),
        ("Chan", "Anylze", 1, 1),
        ("Ricahrd", "Gomez", 3, NULL),
        ("Snake", "Ashly", 4, 3),
        ("Kirm", "Natlia", 5, NULL),
        ("Marry", "Jane", 6, 5),
        ("Shroud", "Less", 7, NULL),
        ("Bare", "Grills", 8, 7),
        ("Tomas", "Hawk", 10, NULL),
        ("Barry", "Fisher", 9, 9);