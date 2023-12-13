import { TodoManagement } from "../lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoListUI.js";

const tdm = new TodoManagement();

function addTodoHandler() {
  const itemInput = document.querySelector("input").value;
  if (itemInput.trim().length !== 0) {
    const todoId = tdm.addTodo(itemInput);
    showTodoItem(todoId, itemInput);
    addButtonHandler(todoId);
    todoStatus();
  }
}

function addButtonHandler(todoId) {
  const btnElement = document.getElementById(todoId);
  const buttons = btnElement.querySelectorAll("button");
  buttons[0].addEventListener("click", notDoneButtonHandler);
  buttons[1].addEventListener("click", removeButtonHandler);
  document.querySelector("input").value = "";
}

function notDoneButtonHandler(event) {
  const doneBtn = event.target;
  setDoneStyle(doneBtn);
  tdm.setItemToDone(doneBtn.parentElement.getAttribute("id"));
  todoStatus();
}

function removeButtonHandler(event) {
  const removeBtn = event.target;
  const removeId = removeBtn.parentElement.getAttribute("id");
  removeTodoItem(removeId);
  tdm.removeTodo(Number(removeId));
  todoStatus();
}

function setDoneStyle(doneButton) {
  doneButton.textContent = "Done";
  doneButton.style.backgroundColor = "green";
  doneButton.style.console = "white";
}

function todoStatus() {
  showNumberOfDone(tdm.getNumberOfDone());
  showNumberOfNotDone(tdm.getNumberOfNotDone());
}

function beforeUnloadHandler(event) {
  event.preventDefault();
  localStorage.setItem("todos", JSON.stringify(tdm.getTodos()));
  tdm.clearTodo();
}

function loadHandler() {
  const localTodos = localStorage.getItem('todos');
  const yourTodos = JSON.parse(localTodos);

  if (
    yourTodos !== null &&
    yourTodos !== undefined &&
    yourTodos?.length !== 0
  ) {
    tdm.loadTodos(yourTodos);
    tdm.getTodos().forEach((todo) => {
      showTodoItem(todo.id, todo.description);
      addButtonHandler(todo.id);
      if (todo.done) {
        const doneBtn = document.getElementById(todo.id).children[1];
        setDoneStyle(doneBtn);
      }
    });
    todoStatus()
  }
  const addButton = document.getElementById("addBtn");
  addButton.addEventListener("click", () => addTodoHandler());

  // const inputTodo = document.querySelector("input");
  // inputTodo.addEventListener("keypress", (event) => {
  //   if (event.key === "Enter") addTodoHandler();
  // });
}



export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  beforeUnloadHandler,
  loadHandler
};
