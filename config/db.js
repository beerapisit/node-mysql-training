const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "training_db",
});

dbConn.connect((err) => {
  if (err) {
    console.error(err);
    // process.exit(1)
  } else {
    console.log("Database connected");
  }
});

module.exports = dbConn;


