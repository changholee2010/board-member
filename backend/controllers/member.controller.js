const service = require("../services/member.service");
// req, res => 활용해서 기능.
const ctrl = {
  register: (req, res) => {
    const { user_id, user_pw, user_name } = req.body;
    // 등록.
    // user_id, user_pw, user_name
    const result = service.register({ user_id, user_pw, user_name });
    console.log(result);
    // 응답.
    res.send("처리완료");
  },
};

module.exports = ctrl;
