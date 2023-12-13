// // const numbers = [1, 2, 3, 4, 5];
// // numbers.forEach((num) => console.log(num));

// const students = [
//   {
//     id: 1,
//     firstName: "Somchai",
//     lastName: "Jaidee",
//   },
//   {
//     id: 2,
//     firstName: "Somsak",
//     lastName: "Deejai",
//   },
//   {
//     id: 3,
//     firstName: "Somsri",
//     lastName: "Jai",
//   },
// ];

// const filterStudent = students.filter((student) =>
//   student.lastName.toLowerCase().startsWith("jai")
// );
// console.log(filterStudent);

// const deStudent = students.filter(
//   (student) =>
//     student.firstName.toLowerCase().includes("de") ||
//     student.lastName.toLowerCase().includes("de")
// );
// console.log(deStudent);

// const ids = students.map((student) => student.id);
// console.log(ids);

// const fullname = students.map(
//   (student) => `${student.lastName} ${student.firstName}`
// );
// console.log(fullname);

// const currentYear = new Date(Date.now()).getFullYear();
// const ids2 = students.map((student) => {
//   return currentYear + "" + student.id;
// });
// console.log(ids2);

// const findJaiStudent = students.find((student) =>
//   student.lastName.toLowerCase().startsWith("jai")
// );
// console.log(findJaiStudent);

// const findIndexJaiStudent = students.findIndex((student) =>
//   student.lastName.toLowerCase().startsWith("jai")
// );
// console.log(findIndexJaiStudent);

// const stdId = students.every((student) => student.id > 0);
// console.log(stdId);

// const stdfName = students.some((student) =>
//   student.firstName.toLowerCase().endsWith("sak")
// );
// console.log(stdfName);

// const names = ["alice", "John", "Bob", "Ann"];
// // All names start with A and a
// const isStartsWithALetter = names.every((n) => n.toUpperCase().startsWith("A"));
// console.log(isStartsWithALetter);

// // at least one name start with A and a
// const isSomeStartsWithALetter = names.some((n) =>
//   n.toUpperCase().startsWith("A")
// );
// console.log(isSomeStartsWithALetter);

// // reduce
// const nums = [5, 2, 3, 4, 7];
// const total = nums.reduce((sum, num) => sum + num, 0);
// console.log(total);

// const sum = nums.reduce((total, number, index,array) => {
//   console.log(index);
//   console.log(array);
//   return total += number
// }, 0)
// console.log(sum);

// const names = ["Alice", "Bob", "Ann", "Cath"];
// const firstChar = names.reduce((name, str) => name + str.charAt(0), "");
// console.log(firstChar);

// let firstChar2 = ""
// names.forEach((str) => firstChar2 += str.charAt(0))
// console.log(firstChar2);

// const items = [
//   { name: "Rice", price: 5 },
//   { name: "Book", price: 20 },
//   { name: "Chicken", price: 10 },
//   { name: "Monitor", price: 100 },
// ];

// items.map((item) => console.log(item.price))

// items.forEach((item) => console.log(item.name))

// let totalPrice2 = 0
// items.forEach((item) => totalPrice2 += item.price)
// console.log(totalPrice2);

// const totalPrice = items.reduce((total, item) => {
//   console.log(`total = ${total}`);
//   console.log(`item = ${item.price}`);
//   return total + item.price;
// }, 0);
// console.log(totalPrice);

// // return total price
// const buyProducts = [
//   { price: 50, quantity: 2 },
//   { price: 299, quantity: 10 },
//   { price: 15, quantity: 5 },
// ];
// const totalPrice = buyProducts.reduce(
//   (product, item) => product + item.price * item.quantity,
//   0
// );
// console.log(totalPrice);

// const people = [
//   {name: "Kyle", age:26},
//   {name: "John", age:31},
//   {name: "Sally", age:42},
//   {name: "Jill", age:42},
// ]

// const resultGroupedPeople = people.reduce((groupedPeople, person) => {
//   const age = person.age
//   if(groupedPeople[age] == null) groupedPeople[age] = []
//   groupedPeople[age].push(person)
//   return groupedPeople;
// }, {})

// console.log(resultGroupedPeople);

// // splice

// const nums = [10, 3, 75, 1, 30, 100];
// // remove 75
// // return array of deleted elements
// const deleted = nums.splice(2, 1);
// console.log(nums);
// console.log(deleted);

// // replace negative numbers to zero
// const nums = [-5, -6, 7, 8, 9, -1, 0];
// console.log(nums);

// const students = [
//   { id: 1, name: "John Lee" },
//   { id: 2, name: "adam Smith" },
//   { id: 3, name: "Alex Albon" },
// ];

// sorting id ascending, descending
// console.log(students.sort((std1, std2) => std1.id - std2.id));
// console.log(students.sort((std1, std2) => std2.id - std1.id));
// sorting name ascending, descending
// Need to return -1, 0, 1

// const items = [
//   { name: "Rice", price: 5 },
//   { name: "Book", price: 20 },
//   { name: "Chicken", price: 10 },
//   { name: "Monitor", price: 100 },
// ];

// const greaterThanFive = items.some((item) =>{
//   return item.price > 101;
// })

// console.log(greaterThanFive);

let myArray = ["Apple", "banana", "Orange", "cherry"];
myArray.sort(function (a, b) {
  return b.toLowerCase().localeCompare(a.toLowerCase());
});
console.log(myArray);