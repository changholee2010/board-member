const service = require("../services/board.service");
// 컨트롤러의 역할 -> /boards => view에 전달.

const ctrl = {
  list: async (req, res) => {
    const rows = await service.findAll();
    res.send(rows);
  },
  create: async (req, res) => {
    // { title: 'postman을 활용', content: 'Post 요청처리하기..', writer: 'user99' }
    const { title, content, writer } = req.body; // fetch('',{method, headers, body})
    const result = await service.create({ title, content, writer });
    res.send(result);
  },
};

module.exports = ctrl;
