// 1.select HTML objects
// const outerDiv = document.getElementById("outer-div");
// const innerDiv = document.getElementById("inner-div");
// const button = document.querySelector("button");

// 2.select type "click"
// 3. register event type to HTML objects

// outerDiv.addEventListener("click", (e) => {
//   console.log("outer div clicked");
//   console.log(e.type); // click
//   console.log(e.target); // press button
//   console.log(e.currentTarget); // div outer
//   console.log(e.eventPhase);
// }, true);

// innerDiv.addEventListener("click", (e) => {
//   console.log("inner div clicked");
//   console.log(e.type); // click
//   console.log(e.target); // press button
//   console.log(e.currentTarget); // div inner
//   console.log(e.eventPhase);
// }, true);

// button.addEventListener("click", (e) => {
//   console.log("button div clicked");
//   console.log(e.type); // click
//   console.log(e.target); // press button
//   console.log(e.currentTarget); // button
//   console.log(e.eventPhase);
// }, true);

// function doSomething() {
//   console.log("do something");
// }

// button.addEventListener("click", () => {
//   console.log("submit clicked");
// });

// button.addEventListener("click", doSomething);

// // remove function handler
// // it's work
// button.removeEventListener("click", doSomething);
// if u write in anonymous function it won't work

// const submitButton = document.getElementById("submit-btn-01");
// const input = document.querySelector("input");
// const p = document.querySelector("p");

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("submit clicked");

//   if (input[0].value.length === 0 || input[1].value.length === 0) {
//     p.textContent = "fail";
//   } else {
//     p.innerHTML = "success";
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom is loaded");
});

window.addEventListener("load", () => {
  console.log("Load");
});

window.addEventListener("beforeunload", () => {
  console.log("before unload");
  localStorage.setItem("myCat", "Summer");
});

const input = document.querySelectorAll("input");

input[0].addEventListener("focus", () => {
  console.log("input focused");
});

input[0].addEventListener("blur", () => {
  console.log("input blur");
});

// input[1].addEventListener('mouseover', () => {
//   console.log("mouse events is active");
// });

// input[0].addEventListener("keyup", (e) => {
//   console.log(`code: ${e.code} key: ${e.key}`);
// });


input[0].addEventListener('keypress', (event) => {
    if (event.key >= 0 || event.key <= 9) {
    event.preventDefault()
    console.log('it is number')
  }
})