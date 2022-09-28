function populateTodoList(todos) {
  for (let i = 0; i < todos.length; i++) {
    const newLI = document.createElement("li");
    const icon1 = document.createElement("i");
    const span = document.createElement("span");
    const icon2 = document.createElement("i");
    const list = document.getElementById("todo-list");
    span.className = "badge bg-primary rounded-pill";
    icon1.className = "fa fa-check";
    icon2.className = "fa fa-trash";
    icon1.ariaHidden = "true";
    icon2.ariaHidden = "true";
    newLI.innerText = todos[i].task;
    newLI.className =
      "list-group-item d-flex justify-content-between align-items-center";
    span.append(icon1, icon2);
    newLI.append(span);

    icon1.addEventListener("click", () => {
      newLI.style.textDecoration === "line-through"
        ? (newLI.style.textDecoration = "none")
        : (newLI.style.textDecoration = "line-through");
    });

    icon2.addEventListener("click", () => {
      list.removeChild(newLI);
    });

    list.append(newLI);
  }
}

// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

//icons for line-through delete completed from list

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "new tester", completed: false },
];
//console.log(todos);
console.log(populateTodoList(todos));

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const addBtn = document.querySelector(".mb-3");
  let userInput = document.querySelector("#todoInput");

  addBtn.addEventListener("click", () => {
    console.log(userInput);
    todos.unshift({ task: userInput.value, completed: false });
    console.log(todos);
    userInput.value = "";
  });

  // }
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
