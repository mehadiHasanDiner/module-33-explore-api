function postData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => loadPostData(data));
}

function loadPostData(posts) {
  const postData = document.getElementById("post-container");
  console.log(posts);
  for (const data of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h2>User Id: ${data.id}</h2>
    <h3>Post Title: ${data.title}</h3>
    <p> Post: ${data.title}</p>
    `;
    postData.appendChild(postDiv);
  }
}

postData();
