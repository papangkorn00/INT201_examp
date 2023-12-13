// preventDefault.js
      const submitButton = document.getElementById('submit-btn-01')
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('submit clicked')
  const inputElements = document.querySelectorAll('input')
  //   console.log(inputElements[0].value)
  //   console.log(inputElements[1].value)
  const pElement = document.querySelector('p')
  if (
    inputElements[0].value.length === 0 ||
    inputElements[1].value.length === 0
  ) {
    pElement.textContent = 'some values are missing, please check'
  } else {
    pElement.textContent = 'Your input are complete'
  }
})

// stateChange.js
      document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded')
})
window.addEventListener('load', () => {
  console.log('Load')
})
window.addEventListener('beforeunload', () => {
  console.log('before unload')
  localStorage.setItem('myCat', 'Tom')
})

// blurFocus.js
      const inputElements = document.querySelectorAll('input')
inputElements[0].addEventListener('focus', () => {
  console.log('input focused')
})
inputElements[0].addEventListener('blur', () => {
  console.log('input blured')
})

// targetValue.js
      const pElement = document.querySelector('p')
const inputUsername = document.querySelector('input')
inputUsername.addEventListener('keyup', (event) => {
  pElement.textContent = event.target.value
})

// eventPropagation.js
      //1. select HTML objects
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')
const submitButton = document.querySelector('button')
//2. select event type "click"
//3. register event type to HTML objects
outerDiv.addEventListener('click', (e) => {
  console.log('outer div clicked')
  console.log(e.type) //click
  console.log(e.target) //<button>Submit</button>
  console.log(e.currentTarget)
  console.log(e.eventPhase)
})
innerDiv.addEventListener('click', (e) => {
  console.log('inner div clicked')
  console.log(e.type) //click
  console.log(e.target) //<button>Submit</button>
  console.log(e.currentTarget)
  console.log(e.eventPhase)
})
submitButton.addEventListener('click', (e) => {
  console.log('submit button clicked')
  console.log(e.type) //click
  console.log(e.target) //<button>Submit</button>
  console.log(e.currentTarget)
  console.log(e.eventPhase)
})

// multipleAndRemoveHandler.js

      //1. select HTML objects
const outerDiv = document.getElementById('outer-div')
const innerDiv = document.getElementById('inner-div')
const submitButton = document.querySelector('button')
function doSomething() {
  console.log('do something')
}
//multiple function handlers on the same HTML object and event type
submitButton.addEventListener('click', () => {
  console.log('submit clicked')
})
submitButton.addEventListener('click', doSomething)
//remove function handler
//it 's work
submitButton.removeEventListener('click', doSomething)
//does not work
submitButton.removeEventListener('click', () => {
  console.log('submit clicked')
})

// html Form
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("submit clicked");
  const input = document.getElementsByTagName("input");
  let bothValid = Array.from(input).every((a) => a.value.length > 0);
  if (bothValid) {
    document.querySelector("p").textContent = "success";
  } else {
    document.querySelector("p").textContent = "fail empty";
  }
});