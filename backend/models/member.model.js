const db = require("../db");

exports.findByUserId = (userid) => {
  return db.query("SELECT * FROM member WHERE userid = ?", [userid]);
};

exports.create = (user) => {
  return db.query("INSERT INTO member(userid, password, name) VALUES(?,?,?)", [
    user.userid,
    user.password,
    user.name,
  ]);
};
