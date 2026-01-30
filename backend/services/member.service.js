const db = require("../db");

const service = {
  // 회원등록.
  register: async (data = {}) => {
    const { user_id, passwd, user_name } = data;
    const [result, schem] = await db.query(
      "insert into member(user_id, user_pw, user_name) values(?,?,?)",
      [user_id, passwd, user_name],
    );
    return result;
  },
};

module.exports = service;
