const express = require("express");
const bodyParser = require("body-parser");
const employeeRoute = require("./src/routes/employee");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/employees", employeeRoute);



// const dbc = require("./config/db");
// app.get("/api/v2/employees", (req, res) => {
//   dbc.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       res.send(500);
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.get("/api/v2/employees/:id", (req, res) => {
//   dbc.query();
// });




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
