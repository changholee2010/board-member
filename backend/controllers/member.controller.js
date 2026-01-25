const service = require("../services/member.service");

exports.register = async (req, res) => {
  try {
    await service.register(req.body);
    res.json({ message: "회원가입 성공" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await service.login(req.body.userid, req.body.password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
