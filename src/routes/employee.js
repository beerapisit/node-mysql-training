const express = require("express");
const router = express.Router();
const employee = require("../controllers/employee");

//find all
router.get("/", employee.findAll);
//create
router.post("/", employee.create);
//findbyid
router.get("/:id", employee.findById);
//update
router.put("/:id", employee.update);
//delete
router.delete("/:id", employee.delete);

module.exports = router;
