import { Todo } from "./todo.js"; //esModule
// const Todo = require('./todo.js');

// function todo
function TodoManagement() {
  let todos = [];

  function addTodo(desc) {
    const todo = new Todo();
    todo.setDescription(desc);
    todos.push(todo);
    return todo.id;
  }
  // add  3 function
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true).length;
  }

  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length;
  }

  function clearTodo() {
    todos = [];
  }

  //   ให้เพิ่มฟังก์ชัน setItemToDone(doneId) เพื่อค้นหา todo ที่มีค่าตรงกับ doneId
  //   จากนั้นให้เรียกฟังก์ชัน setDone() เพื่อกำหนดค่า done ให้เป็น true
  function setItemToDone(doneId) {
    const done = todos.find((todo) => todo.id === Number(doneId));
    done.setDone(true);
  }

  function loadTodos(userTodos) {
    userTodos.forEach((todo) => {
      todos.push(new Todo(undefined,todo.description,todo.done))
    });
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId);
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId);
  }

  function removeTodo(removeId) {
    const indexToRemove = findIndexTodo(removeId);
    if (indexToRemove >= 0) {
      todos.splice(indexToRemove, 1);
    }
  }

  function getTodos() {
    return todos;
  }

  return {
    addTodo,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setItemToDone,
    loadTodos,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
  };
}

export { TodoManagement }; //esModule
// module.exports = TodoManagement;
