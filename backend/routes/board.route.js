const router = require("express").Router();
const ctrl = require("../controllers/board.controller");
// const auth = require("../middlewares/auth");

// 라우팅.
// http://localhost:3000/boards/5
router.get("/pg/:page", ctrl.list); // 목록.
router.get("/totalCount", ctrl.totalCount);
router.get("/:id", ctrl.detail); // 단건조회.
router.post("/", ctrl.create); // 등록.
router.put("/:id", ctrl.update); // 수정.
// 삭제 (delete, 컨트롤: remove, 서비스: remove)
// router.delete("/:id", auth, ctrl.remove); // 삭제.

module.exports = router;
