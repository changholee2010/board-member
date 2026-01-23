const express = require("express");
const boardRoute = require("./routes/board.route");

const app = express(); // 인스턴스.
app.use(express.json()); // body데이터(json포맷) 해석.

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   if (req.method === "OPTIONS") return res.sendStatus(200);
//   next();
// });
app.use("/boards", boardRoute); // 게시판 라우팅.

// 라우팅.
app.get("/", (req, res) => {
  res.send("/ 경로호출");
});

app.listen(3000, () => {
  console.log("서버실행 http://localhost:3000");
});
