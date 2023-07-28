function loadTodoData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => loadTodo(data));
}

function loadTodo(todos) {
  const toDoContainer = document.getElementById("todo-container");
  for (const todo of todos) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-list");
    todoDiv.innerHTML = `
    <p>Id No: ${todo.id}</p>
    <h2>${todo.title}</h2>
    <p>Is Completed: ${
      todo.completed === true ? "Completed" : "Not completed"
    }</p>
    `;
    toDoContainer.appendChild(todoDiv);
  }
}

loadTodoData();

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);
