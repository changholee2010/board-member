const service = require("../services/board.service");
// 컨트롤러의 역할 -> /boards => view에 전달.

const ctrl = {
  list: async (req, res) => {
    // const rows = await service.findAll();
    const rows = [
      {
        id: 1,
        title: "test",
        content: "test content",
        writer: "user01",
        created_at: new Date(),
      },
    ];
    res.json(rows);
  },
  create: async (req, res) => {
    // { title: 'postman을 활용', content: 'Post 요청처리하기..', writer: 'user99' }
    const { title, content, writer } = req.body; // fetch('',{method, headers, body})
    const result = await service.create({ title, content, writer });
    res.send(result);
  },
  detail: async (req, res) => {
    console.log(req.params.id);
    const rows = await service.findById(req.params.id);
    res.send(rows);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    const result = await service.update({ title, content, id });
    // false (falsy : 0, null, "", undefined)
    if (result) {
      res.json({ retCode: "OK" });
    } else {
      res.json({ retCode: "NG" });
    }
  },
};

module.exports = ctrl;
