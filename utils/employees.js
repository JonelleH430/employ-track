const db = require('../db/connection');
const Ctable = require('console.table');

const viewEmployees = () => {
    const sql = `SELECT e.first_name, e.last_name, roles.title AS role, roles.salary AS salary, m.first_name AS manager
    FROM employees e
    LEFT JOIN roles ON roles.id = e.role_id
    LEFT JOIN employees m ON m.id = e.manager_id;`

    return db.query(sql)
    .then(results => {
        [rows] = results;
        console.table(rows);
    })
    .catch(console.log);
};

const byDepartment = (info) => {
    const department = info.department;

    switch(department) {
        case 'Engineering':
            id = 1;
            break;
        case 'Creative':
            id = 2;
            break;
        case 'Marketing':
            id = 3;
            break;
        case 'Finance':
            id = 4;
            break;
    };

    const sql = `SELECT e.first_name, e.last_name, roles.title AS role, roles.salary AS salary, m.first_name AS manager
    FROM employees e
    LEFT JOIN roles ON roles.id = e.role_id
    LEFT JOIN employees m ON m.id = e.manager_id
    WHERE roles.department_id = ?`

    return db.query(sql, id)
    .then(results => {
        [rows] = results;
        console.table(rows)
    })
    .catch(console.log);
};

const byManager = (info) => {
    const manager = info.manager;

    const sql = `SELECT e.first_name, e.last_name, roles.title AS role, roles.salary AS salary, m.first_name AS manager
    FROM employees e
    LEFT JOIN roles ON roles.id = e.role_id
    LEFT JOIN employees m ON m.id = e.manager_id
    WHERE m.first_name = ?`

    return db.query(sql, manager)
    .then(results => {
        [rows] = results;
        console.table(rows);
    })
    .catch(console.log);
};

const addEmployee = (info) => {
    const first_name = info.first_name;
    const last_name = info.last_name;

    const roles = ['Front-end Developer', 'Back-end Developer', 'Lead Engineer', 'UX Designer', 'Graphic Designer', 'Creative Director', 'Marketing Coordinator', 'Marketing Analyst', 'Marketing Director',
    'Accountant', 'Finanial Analyst', 'Finance Manager '];
    const findRole = (element) => element === info.role;
    const role_id = roles.findIndex(findRole) + 1;

    const managers = ['Jonelle', 'Jerome', 'Joan', 'Clinton', 'None'];
    const findManager = (element) => element === info.manager;
    const manager_id = managers.findIndex(findManager) + 1;
    if (manager_id === 5) {
        manager_id = null;
    }

    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?);`
    const params = [first_name, last_name, role_id, manager_id];
    console.log(params);

    return db.query(sql, params)
    .then(console.log('Employee Added'))
    .catch(console.log);
};

const updateRole = (info) => {
    
    const employees = ['Jonelle Harris', 'Jerome Harris', 'Joan Harris', 'Clinton Harris', 'Denessia Hepburn', 'Perry Hepburn', 'Jahneel Hepburn', 'Latonya Banton', 'Chauncey Haye', 'Naomi Haye', 'Lexy Bennett', 'Tamia Richards'];
    const findEmployee = (element) => element === info.updateEmployee;
    const id = employees.findIndex(findEmployee) + 1;

    const roles = ['Front-end Developer', 'Back-end Developer', 'Lead Engineer', 'UX Designer', 'Graphic Designer', 'Creative Director', 'Marketing Coordinator', 'Marketing Analyst', 'Marketing Director',
    'Accountant', 'Finanial Analyst', 'Finance Manager '];
    const findRole = (element) => element === info.newRole;
    const role_id = roles.findIndex(findRole) + 1;

    const params = [role_id, id];
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

    return db.query(sql, params)
    .then(console.log('Employee Updated'))
    .catch(console.log);
};


const updateManager = (info) => {
    
    const employees = ['Jonelle Harris', 'Jerome Harris', 'Joan Harris', 'Clinton Harris', 'Denessia Hepburn', 'Perry Hepburn', 'Jahneel Hepburn', 'Latonya Banton', 'Chauncey Haye', 'Naomi Haye', 'Lexy Bennett', 'Tamia Richards'];
    const findEmployee = (element) => element === info.updateEmployee;
    const id = employees.findIndex(findEmployee) + 1;

    const managers = ['Jonelle', 'Jerome', 'Joan', 'Clinton', 'None'];
    const findManager = (element) => element === info.newManager;
    const manager_id = managers.findIndex(findManager) + 1;
    if (manager_id === 5) {
        manager_id = null;
    }

    const sql = `UPDATE employees SET manager_id = ? WHERE id = ?`;
    const params = [manager_id, id];

    return db.query(sql, params)
    .then(console.log('Employee Updated!'))
    .catch(console.log);
};

const deleteEmployee = (info) => {
    
    const employees = ['Jonelle Harris', 'Jerome Harris', 'Joan Harris', 'Clinton Harris', 'Denessia Hepburn', 'Perry Hepburn', 'Jahneel Hepburn', 'Latonya Banton', 'Chauncey Haye', 'Naomi Haye', 'Lexy Bennett', 'Tamia Richards'];
    const findEmployee = (element) => element === info.delete;
    const id = employees.findIndex(findEmployee) + 1;

    console.log(id);
    const sql = `DELETE FROM employees WHERE id = ?`;

    return db.query(sql, id)
    .then(console.log('Employee Deleted!'))
    .catch(console.log);
};


module.exports = { viewEmployees, byDepartment, byManager, addEmployee, updateRole, updateManager, deleteEmployee };