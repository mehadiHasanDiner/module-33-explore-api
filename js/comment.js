function loadUsersComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => commentsData(data));
}

function commentsData(comments) {
  const commentContainer = document.getElementById("comment-container");
  for (const comment of comments) {
    console.log(comment);

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    commentDiv.innerHTML = `
    <h2>User Id: ${comment.name}</h2>
    <p>User Email-id: ${comment.email}</p>
    <p>Post Id: ${comment.postId}</p>
    <p>User Id: ${comment.id}</p>
    <p>Comment: ${comment.body}</p>
    `;
    commentContainer.appendChild(commentDiv);
  }
}

loadUsersComment();
