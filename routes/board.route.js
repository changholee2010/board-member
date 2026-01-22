const router = require("express").Router();
const ctrl = require("../controllers/board.controller");

// 라우팅.
// http://localhost:3000/boards/5
router.get("/", ctrl.list); // 목록.
router.post("/", ctrl.create); // 등록.
router.get("/:id", ctrl.detail); // 단건조회.

module.exports = router;
