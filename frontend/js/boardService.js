// boardService.js (모듈기능 제공)
const API_URL = "http://localhost:3000/boards";

// svc 객체에 메소드 정의.
const svc = {
  // 전체 글목록.
  getBoards(page, callback) {
    fetch(API_URL + "/pg/" + page)
      .then((resp) => resp.json())
      .then(callback)
      .catch((err) => console.error(err));
  },
  // 페이징을 위한 전체건수.
  getTotalCount(callback) {
    fetch(API_URL + "/totalCount")
      .then((resp) => resp.json())
      .then(callback)
      .catch((err) => console.error(err));
  },
  // 삭제를 위한 메소드.
  removeBoard(id, callback) {
    fetch(API_URL + `/${id}`, {
      method: "delete",
    })
      .then((resp) => resp.json())
      .then(callback)
      .catch((err) => console.error(err));
  },
  // 날짜 포맷.
  formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = date.getHours();
    const mi = date.getMinutes();
    const ss = date.getSeconds();
    // 날짜 포맷 출력 => yyyy-mm-dd HH:MM:SS 형태출력 메소드.
    return `${yyyy}-${("0" + mm).slice(-2)}-${("0" + dd).slice(-2)} ${("0" + hh).slice(-2)}:${("0" + mi).slice(-2)}:${("0" + ss).slice(-2)}`;
  },
  // 등록.
  addPost(post = {}, callback) {
    fetch(API_URL, {
      method: "post",
      headers: "",
      body: "",
    })
      .then((resp) => resp.json())
      .then(callback)
      .catch((err) => console.error(err));
  },
};

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
export { svc };
