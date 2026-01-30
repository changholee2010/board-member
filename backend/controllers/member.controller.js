const service = require("../services/member.service");
const crypto = require("crypto");

// req, res => 활용해서 기능.
const ctrl = {
  register: async (req, res) => {
    const { user_id, user_pw, user_name } = req.body;
    // 등록.
    // user_id, user_pw, user_name
    let passwd = crypto.createHash("sha512").update(user_pw).digest("base64");
    // 위에서 평문을 암호화한 값으로 변경한 후 등록.

    // 응답.
    try {
      const result = await service.register({ user_id, passwd, user_name });
      console.log(result);
      res.json({ retCode: "OK" });
    } catch (err) {
      console.log(err);
      res.json({ retCode: "NG" });
    }
  },
};

module.exports = ctrl;
