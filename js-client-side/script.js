// const rootNode = document // root node

// console.log(rootNode);
// console.log(rootNode.nodeName);
// console.log(rootNode.nodeType);
// console.log(rootNode.nodeValue);

// console.log(document.documentElement); // root element = html
// console.log(document.documentElement.nodeType); // root element = html

// console.log(document.body); // html>body
// console.log(document.body.nodeType); // 1
// console.log(document.head); // html>head
// console.log(document.head.nodeType); // 1
// console.log(document.title); // html>head>title
// console.log(document.title.nodeType); // undefined

const headElement = document.head;
console.log(headElement);

// return the chidren(all node types), NodeList data type
console.log(headElement.childNodes);

// return child elements(only element types), HTMLCollection data type
console.log(headElement.children);

const headChildNodes = headElement.childNodes;
// NodeList is an array, can use all array functions
headChildNodes.forEach((hc) => {
  console.log(hc.nodeName);
  console.log(hc.nodeType);
  console.log(hc.nodeValue);
});
console.log("----------------");
// HTMLCollection is array-like (not real array), need to convert to
// convert array before using array functions
const headChidren = headElement.children;
Array.from(headChidren).forEach((hc) => {
  console.log(hc.nodeName);
  console.log(hc.nodeType);
  console.log(hc.nodeValue);
});

// first child
console.log(headElement.firstElementChild);
console.log(headElement.firstChild);
// last child
console.log(headElement.lastElementChild);
console.log(headElement.lastChild);
// parent
console.log(headElement.parentElement);
console.log(headElement.parentNode);
// previous sibling
console.log(headElement.previousElementSibling);
console.log(headElement.previousSibling);
// next sibling
console.log(headElement.nextElementSibling);
console.log(headElement.nextSibling);

const headFirstElementChild = headElement.firstElementChild;
const headFirstElementChildAttrs = headFirstElementChild.attributes;
console.log(headFirstElementChildAttrs);
Array.from(headFirstElementChildAttrs).forEach((attr) => console.log(attr));

console.log("// getChildBody");
const childBody = document.body;
console.log(childBody);

const childNodes = childBody.childNodes;
// NodeList:array-like (implement for-each, cannot array methods),
// return children with all node types
console.log(childNodes);

const children = childBody.children;
// HTMLCollection:array-like (not implement for-each,
// cannot array methods), return children with only element type
console.log(children);

childNodes.forEach((bcn) => {
  console.log(bcn);
});

// convert to Array
Array.from(children).forEach((bc) => {
  console.log(bc);
});

console.log(childBody.firstElementChild);
console.log(childBody.firstChild);
console.log(childBody.lastElementChild);
console.log(childBody.lastChild);

console.log(childBody.firstChild === childBody.firstElementChild);
console.log(childBody.lastChild === childBody.lastElementChild);

console.log(document.documentElement === document.firstElementChild);
console.log(document.documentElement === document);

console.log(document.documentElement); // html, root element
console.log(document); // root node

// query/select element by id
const course201Ele = document.getElementById("int201");
console.log(course201Ele);

// querySelector return firstNode
const course101Ele = document.querySelector("#int101");
console.log(course101Ele);

const courseBscit = document.querySelector("#bscit-courses");
console.log(courseBscit);

const programmingCourse = document.querySelector(".programming");
console.log(programmingCourse);

// select/query a Collection of element
//find by selector
const progEle = document.querySelectorAll("#int201,.programming");
console.log(progEle); // return Nodelist

const liEle = document.querySelectorAll("li");
console.log(liEle); // return Nodelist

// find by tag
const liEle2 = document.getElementsByTagName("li");
console.log(liEle2); // return HTMLCollection

// find by className
const coursesEle = document.getElementsByClassName("courses");
console.log(coursesEle);

const divLectElement = document.querySelector(".lecturers");
//get <li> under div.lecturers
const liDivLect = divLectElement.querySelectorAll("li");
console.log(liDivLect);
//get <li> under document node
const allLi = document.querySelectorAll("li");
console.log(allLi);

const firstDiv = document.body.firstElementChild;
console.log(firstDiv);
const firstDivAttributes = firstDiv.attributes; //get all attribute of any element
console.log(firstDivAttributes); //length=2, id and class attributes
Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name);
  console.log(attr.value);
});
console.log(firstDiv.getAttribute("id")); //return value of specified attribute 'id'
console.log(firstDiv.getAttribute("class"));
//return value of specified attribute 'name'
const firstAttribute = firstDivAttributes[0];
console.log(firstAttribute.ownerDocument);
console.log(firstAttribute.ownerElement);

//create a new attribute named 'owner' value 'Papangkorn'
firstDiv.setAttribute("owner", "Papangkorn");

// create <p> under div.courses
const newPEle = document.createElement("p");
console.log(newPEle);
newPEle.textContent = "Client Web Programming II";
// <p>Client Web Programming II</p>
newPEle.setAttribute("id", "int203");
// <p id="int203">Client Web Programming II</p>
newPEle.setAttribute("class", "courses");
// <p id="int203" class="courses">Client Web Programming II</p>
const divCoursesP = document.getElementById("bscit-courses");
// divCoursesP.appendChild(newPEle);

const refNode = divCoursesP.lastElementChild;
// divCoursesP.insertBefore(newPEle, refNode);

divCoursesP.replaceChild(newPEle, refNode);
// replace int201 with int203

divCoursesP.removeChild(newPEle);

alert("Do you want to exit");
const username = prompt("Please enter your name");
console.log(username);
const userAction = confirm(`Goodbye ${username}`);
console.log(userAction);
