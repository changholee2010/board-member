const router = require("express").Router();
const ctrl = require("../controllers/member.controller");

// 라우팅(post, /register, 응답.)
router.post("/register", ctrl.register);

module.exports = router;
