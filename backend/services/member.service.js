const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Member = require("../models/member.model");

exports.register = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  return Member.create({
    userid: data.userid,
    password: hash,
    name: data.name,
  });
};

exports.login = async (userid, password) => {
  const [rows] = await Member.findByUserId(userid);
  if (!rows.length) throw new Error("존재하지 않는 사용자");

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("비밀번호 불일치");

  const token = jwt.sign(
    { id: user.id, userid: user.userid },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return token;
};
