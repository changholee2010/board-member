const API_URL = "/api/boards";

document.addEventListener("DOMContentLoaded", loadBoards);

// 목록 조회
function loadBoards() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const tbody = document.getElementById("boardList");
      tbody.innerHTML = "";

      data.forEach((post, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${post.title}</td>
          <td>${post.content}</td>
          <td>${post.created_at || ""}</td>
        `;
        tbody.appendChild(tr);
      });
    });
}

// 글 등록
function createPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("제목과 내용을 입력하세요");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  })
    .then((res) => res.json())
    .then(() => {
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
      loadBoards();
    });
}
