const Employee = require("../models/employee");

exports.findAll = (req, res) => {
  Employee.findAll((err, employee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(employee);
    }
  });
};

exports.create = (req, res) => {
  const newEmp = new Employee(req.body);
  console.log(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Invalid data" });
  } else {
    Employee.create(newEmp, (err, employee) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(employee);
      }
    });
  }
};

exports.findById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employee);
    }
  });
};

exports.update = (req, res) => {
  const newEmp = new Employee(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Invalid data" });
  } else {
    Employee.update(req.params.id, newEmp, (err, employee) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(employee);
      }
    });
  }
};

exports.delete = (req, res) => {
  Employee.delete(req.params.id, (err, employee) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(employee);
    }
  });
};

function handleError(err, employee) {
    if (err) {
        res.status(500).send(err);
      } else {
        res.json(employee);
      }
}