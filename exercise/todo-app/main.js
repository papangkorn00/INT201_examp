import { TodoManagement } from "./lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
} from "./UI/todoListUI.js";
import { Todo } from "./lib/todo.js";
import {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  loadHandler,
  beforeUnloadHandler
} from "./eventHandler/eventController.js";

// const tdm = new TodoManagement();

const btn = document.getElementById("addBtn");
btn.addEventListener("click", addTodoHandler);



window.addEventListener('load', () =>{
  loadHandler()
})

window.addEventListener('beforeunload', (event) =>{
  beforeUnloadHandler(event)
})

// const inputTodo = document.querySelector('input')
// inputTodo.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') addTodoHandler()
// })