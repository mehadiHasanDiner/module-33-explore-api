function loadUsersData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => userData(data));
}

function userData(data) {
  const ul = document.getElementById("list-item");
  //   console.log(data);
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
