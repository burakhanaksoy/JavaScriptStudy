const todos = [
  { title: "Todo 1", description: "Study JS" },
  { title: "Todo 2", description: "Study Vue" },
  { title: "Todo 3", description: "Party hard!" },
];

const toDoUl = document.querySelector(".ul-list");
function todoList() {
  let todoItem = "";
  setTimeout(function() {
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

function addTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      todos.push(todo);
      const e = false;

      if (!e) {
        resolve();
      } else {
        reject("Hata var...");
      }
    }, 2000);
  });
}

addTodo(newTodo)
  .then((response) => {
    console.log();
    todoList();
  })
  .catch((err) => {
    console.log(err);
  });
