const pool = require("../db");

const service = {
  // 전체 조회.
  findAll: async function () {
    let [rows, result] = await pool.query("select * from board"); // 배열 구조분해.
    return rows;
  },
  // 단건 조회.
  findById: async function (id) {
    let [rows, result] = await pool.query("select * from board where id = ?", [
      id,
    ]); // 배열 구조분해.
    return rows;
  },
  // Create(생성).
  create: async function (data = {}) {
    const { title, content, writer } = data; // 객체 구조분해.
    let result = await pool.query(
      "insert into board(title,content,writer) values(?,?,?)",
      [title, content, writer],
    );
    return result[0].insertId;
  },
  update: async function (data = {}) {
    const { title, content, id } = data; // 객체 구조분해.
    let result = await pool.query(
      "update board set title = ?, content = ? where id = ?",
      [title, content, id],
    );
    console.log(result);
    return result[0].affectedRows;
  },
};

module.exports = service;
