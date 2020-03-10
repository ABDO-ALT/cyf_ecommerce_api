const express = require("express");
const app = express();
const secrets = require("./secrets");
app.get("/customers", (req, res) => {
  pool.query("SELECT * FROM customers", (error, result) => {
    res.json(result.rows);
  });
});
app.get("/suppliers", (req, res) => {
  pool.query("SELECT * FROM suppliers", (error, result) => {
    res.json(result.rows);
  });
});
app.get("/products", (req, res) => {
  pool.query(
    "select suppliers.supplier_name, products.* from products join suppliers on suppliers.id=products.supplier_id",
    (error, result) => {
      res.json(result.rows);
    }
  );
});
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cyf_ecommerce",
  password: secrets.dbPassword,
  port: 5432
});
app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
