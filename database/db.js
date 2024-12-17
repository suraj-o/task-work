const mysql = require("mysql2");
require("dotenv");

const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  port: 3306,
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "testdb",
});

 const DataBase = () => db.getConnection((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the MySQL database.");
  }
});

module.exports={db, DataBase}