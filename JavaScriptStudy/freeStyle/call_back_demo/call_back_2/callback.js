const todos = [
  { title: "Todo 1", description: "Study JS" },
  { title: "Todo 2", description: "Study Vue" },
  { title: "Todo 3", description: "Party hard!" },
];

const toDoUl = document.querySelector(".ul-list");
function todoList() {
  let todoItem = "";
  setTimeout(function() {
    console.log("Hello");
    todos.forEach((todo) => {
      todoItem += `
      <li>
      <b>${todo.title}</b>
      <p>${todo.description}</p>
      </li>
        `;
    });
    toDoUl.innerHTML = todoItem;
  }, 1500);
}

newTodo = { title: "Todo 4", description: "Rest...zzz" };

function addTodo(todo, callback) {
  setTimeout(function() {
    todos.push(todo);
    callback();
  }, 2000);
}

addTodo(newTodo, todoList);

console.log(todos);
