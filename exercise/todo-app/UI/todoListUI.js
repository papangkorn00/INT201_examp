function showTodoItem(newId, newDescription) {
  const listItemDiv = document.getElementById("listTodo");

  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "todoItem");
  newDiv.setAttribute("id", newId);

  const newP = document.createElement("p");
  newDiv.appendChild(newP);
  newP.textContent = newDescription;

  const notDoneButton = document.createElement("button");
  newDiv.appendChild(notDoneButton);
  notDoneButton.textContent = "Not done";

  const removeButton = document.createElement("button");
  newDiv.appendChild(removeButton);
  removeButton.textContent = "remove";

  listItemDiv.appendChild(newDiv);
}

function showNumberOfDone(numberOfDone) {
  const doneP = document.getElementById("done");
  doneP.textContent = `Number of Done: ${numberOfDone}`;
}

function showNumberOfNotDone(numberOfNotDone) {
  const notDoneP = document.getElementById("notDone");
  notDoneP.textContent = `Number of Not Done: ${numberOfNotDone}`;
}

function removeTodoItem(removeId){
    const removeItem = document.getElementById(removeId)
    removeItem.parentElement.removeChild(removeItem)
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem };

// showTodoItem();
// showNumberOfDone();
// showNumberOfNotDone();
