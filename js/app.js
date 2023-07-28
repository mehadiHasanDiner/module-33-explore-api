// function loadData2() {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

function loadUser() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  console.log(data);
}
