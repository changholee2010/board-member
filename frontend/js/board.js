const API_URL = "http://localhost:3000/boards";

// CORS => 동일한 출처 허용.
// http (프로토콜), 호스트(localhost), Port(3000, 5500)

// Date 객체에 메소드 추가.
Date.prototype.formatDate = function () {
  const yyyy = this.getFullYear();
  const mm = this.getMonth() + 1;
  const dd = this.getDate();
  const hh = this.getHours();
  const mi = this.getMinutes();
  const ss = this.getSeconds();
  // 날짜 포맷 출력 => yyyy-mm-dd HH:MM:SS 형태출력 메소드.
  return `${yyyy}-${("0" + mm).slice(-2)}-${("0" + dd).slice(-2)} ${("0" + hh).slice(-2)}:${("0" + mi).slice(-2)}:${("0" + ss).slice(-2)}`;
};

fetch(API_URL)
  .then((resp) => resp.json())
  .then((data) => {
    const target = document.querySelector("#boardList"); // tbody 목록.
    // 전체목록 출력 및 tbody에 생성.
    data.forEach((board) => {
      const str = `<tr>
                     <td>${board.id}</td>
                     <td>${board.title}</td>
                     <td>${board.writer}</td>
                     <td>${new Date(board.created_at).formatDate()}</td>
                   </tr>`;
      target.insertAdjacentHTML("beforeend", str);
    });
  })
  .catch((err) => console.error(err));

// document.addEventListener("DOMContentLoaded", loadBoards);
