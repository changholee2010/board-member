const pool = require("../db");

async function findAll() {
  let [rows, result] = await pool.query("select * from board");
  console.log(rows);
}
findAll();
