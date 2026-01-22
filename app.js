const express = require("express");

const app = express();

// 라우팅.
app.get("/", (req, res) => {
  res.send("/ 경로호출");
});

app.listen(3000, () => {
  console.log("서버실행 http://localhost:3000");
});
