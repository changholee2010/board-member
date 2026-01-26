const pool = require("../db");

const service = {
  // 전체 조회.
  findAll: async function (page) {
    // 1 -> 0, 2 -> 10, 3 -> 20
    const offset = (page - 1) * 6; // 페이지 에 따른 offset 계산.
    let [rows, result] = await pool.query(
      "select * from board order by id desc limit 6 offset ?",
      [offset],
    ); // 배열 구조분해.
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
  // 수정.
  update: async function (data = {}) {
    const { title, content, id } = data; // 객체 구조분해.
    let result = await pool.query(
      "update board set title = ?, content = ? where id = ?",
      [title, content, id],
    );
    console.log(result);
    return result[0].affectedRows;
  },
  // 삭제.
  remove: async function (id) {
    let result = await pool.query("delete from board where id = ?", [id]);
    console.log(result);
    return result[0].affectedRows;
  },
  totalCount: async function () {
    let [rows, result] = await pool.query("select count(*) as cnt from board"); // 배열 구조분해.
    return rows[0]; // [{"cnt": 320}]
  },
};

module.exports = service;
