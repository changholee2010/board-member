const pool = require("../db");

const service = {
  findAll: async function () {
    let [rows, result] = await pool.query("select * from board"); // 배열 구조분해.
    return rows;
  },
  findById: async function () {},
  create: async function (data = {}) {
    const { title, content, writer } = data; // 객체 구조분해.
    let result = await pool.query(
      "insert into board(title,content,writer) values(?,?,?)",
      [title, content, writer],
    );
    return result[0].insertId;
  },
};

module.exports = service;
