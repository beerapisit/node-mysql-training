const dbConn = require("./../../config/db");

let Employee = function (emp) {
  this.first_name = emp.first_name;
  this.last_name = emp.last_name;
  this.email = emp.email;
  this.phone = emp.phone;
  this.organization = emp.organization;
  this.designation = emp.designation;
  this.salary = emp.salary;
  this.status = emp.status ? emp.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Employee.create = (newEmp, result) => {
  dbConn.query("INSERT INTO employees SET ?", newEmp, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Employee.findAll = async (result) => {
  dbConn.query("SELECT * FROM employees", (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Employee.findById = (id, result) => {
  dbConn.query("SELECT * FROM employees WHERE id = ?", id, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Employee.update = (id, emp, result) => {
  const { first_name, last_name } = emp;
  dbConn.query(
    "UPDATE employees SET first_name=?, last_name=? WHERE id=?",
    [first_name, last_name, id],
    (err, res) => {
      if (err) {
        console.error(err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Employee.delete = (id, result) => {
  dbConn.query("DELETE FROM employees WHERE id=?", [id], (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
