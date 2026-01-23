const router = require("express").Router();
const ctrl = require("../controllers/board.controller");

// 라우팅.
// http://localhost:3000/boards/5
router.get("/", ctrl.list); // 목록.
router.get("/:id", ctrl.detail); // 단건조회.
router.post("/", ctrl.create); // 등록.
router.put("/:id", ctrl.update); // 수정.
// 삭제 (delete, 컨트롤: remove, 서비스: remove)

module.exports = router;
