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

// 게시글 목록 출력.
function loadBoards(page = 1) {
  fetch(API_URL + "/pg/" + page)
    .then((resp) => resp.json())
    .then((data) => {
      const target = document.querySelector("#boardList"); // tbody 목록.
      target.innerHTML = "";
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
}
loadBoards();
// document.addEventListener("DOMContentLoaded", loadBoards);

// 페이징목록 출력.
let page = 3; // page 전역변수.
function loadPagingList() {
  const pagination = document.querySelector("div.pagination");
  fetch(API_URL + "/totalCount")
    .then((resp) => resp.json())
    .then((data) => {
      // 변수선언 및 계산.
      const totalCnt = data.cnt;
      let endPage = Math.ceil(page / 5) * 5; // 현재페이지를 기준으로 계산한 페이지.
      let startPage = endPage - 4;
      let realEnd = Math.ceil(totalCnt / 5); // 건수를 기준으로 실제마지막.
      // 실제 마지막페이지와 비교.
      endPage = endPage > realEnd ? realEnd : endPage;
      let prev = startPage == 1 ? false : true; // startPage(1,6,11,16...)

      // <a href="#" class="page-btn disabled">«</a>
      // 이전페이지.
      let aTag = document.createElement("a");
      aTag.innerText = "«";
      aTag.setAttribute("href", "#");
      // 이전페이지의 여부에 따라서 disabled 속성을 지정.
      if (prev) {
        aTag.className = "page-btn";
      } else {
        aTag.className = "page-btn disabled";
      }
      pagination.appendChild(aTag); // 부모.appendChild.자식

      // 페이지.
      for (let pg = startPage; pg <= endPage; pg++) {
        let aTag = document.createElement("a");
        aTag.innerText = pg; // <a>3</a>
        aTag.setAttribute("href", "#");
        // active 페이지 설정.
        if (pg == page) {
          aTag.className = "page-btn active";
        } else {
          aTag.className = "page-btn";
        }
        pagination.appendChild(aTag); // 부모.appendChild.자식
      }
      // 이후페이지.
    })
    .catch((err) => console.error(er));
}
loadPagingList();

// a태그에 클릭이벤트.
document.querySelectorAll("div.pagination>a").forEach((elem) => {
  elem.addEventListener("click", function (e) {
    loadBoards(this.innerText);
  });
});
