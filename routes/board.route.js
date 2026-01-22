const router = require("express").Router();
const ctrl = require("../controllers/board.controller");

// 라우팅.
// http://localhost:3000/boards/
router.get("/", ctrl.list);
router.post("/", ctrl.create);

module.exports = router;
