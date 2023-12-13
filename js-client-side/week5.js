// //initial x with empty array
// const x = []; // type of array is object
// console.log(typeof x);

// x.length === 0 ? console.log("empty array") : console.log("not empty array");

// //x[index], add a new elemtn by using index
// x[0] = 1;
// x[1] = 3;
// x[2] = 5;

// //add new element in the end of array by using push function
// x.push(7);
// x.push(9);

// console.log(x); //output -> [ 1, 3, 5, 7, 9 ]

// const y = [1, true, "beginner", 2.5]; //untypes, mixed type
// console.log(y); //[ 1, true, 'beginner', 2.5 ]
// console.log(y[0]); //1
// console.log(y.length); //4

// //nested with array
// const z = [
//   [2, 4, 6],
//   [true, false],
//   ["a", "b", "c"],
// ];

// console.log(z[0]);
// console.log(z[z.length - 1]);

// //nested with object
// const m = [
//   { productId: 1, name: "pen", price: 200 },
//   { productId: 2, name: "notebook", price: 100 },
//   { productId: 3, name: "pencil", price: 50 },
// ];

// console.log(m.length);
// console.log(m[0]);
// console.log(m[m.length - 1]);

// //spread operator
// const x = [5, 7, 9];
// const y = [...x, 11, 13];

// console.log(x);
// console.log(y);

// const z = "Today is good day";
// const m = [...z];
// console.log(m);

// //for...of uses with array
// for(const ch of m){
//     console.log(ch);
// }

// for(const value of x){
//     console.log(value);
// }

// // create array with constructor
// const x = new Array(); //create empty array, no parameter
// console.log(x);
// console.log(x.length); // x.lenght = 0

// const y = new Array(5); // 5 is lenght of array
// console.log(y.length); //5
// console.log(y[0]); //undefined

// const z = new Array(10, "A");
// console.log(z.length);
// console.log(z[0]);
// console.log(z[z.length - 1]);

// // create array with Array.of() function
// const x = Array.of(5);
// const y = Array.of(1, 5, 7);
// const z = Array.of(true, "A", "JS");

// console.log(x.length);
// console.log(y.length);
// console.log(z.length);

// //  create array with Array.from()
// const x = [1, 3, 5];
// const y = [2, 4, 6];
// const z = Array.from(x);
// const a = [...x, ...z]
// console.log(a);

// // destructuring array
// // create array named nums
// const nums = [1, 3, 5, 7, 9];

// //destructuring
// const [a, b, c] = nums; // a=1,a=3,a=5
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// const [x] = nums;
// console.log(x);
// // destruturing with skip some indexes
// const [, , , y, , ...z] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// console.log(y); //20
// console.log(z); //[ 30, 35, 40, 45, 50 ]

// const [...m] = nums;
// console.log(m); //[ 1, 3, 5, 7, 9 ]

// //cosnt nums = [1,3,5,7,9]
// const n = nums; //memory address ofn nums to n
// n[0] = 999;
// console.log(nums);
// console.log(n);
// //all below are destructuring
// const [o] = nums; //999
// const [, p] = nums; //3
// const [...q] = nums; //[ 999, 3, 5, 7, 9 ]
// console.log(o);
// console.log(p);
// console.log(q);

// //function
// function doSomething(msg) {
//   return msg;
// }

// console.log(doSomething("hello"));
// console.log(doSomething("hi"));
// console.log(doSomething("hey"));

// console.log(typeof doSomething);

// //1. create function with function declaration
// function concat(str1, str2) {
//   return str1 + str2;
// }

// //2. create function with fucntion expression
// const toUpper = function (str1) {
//   return str1.toUpperCase();
// };

// //3. create function with named function expression
// const reverse = function rev(str1) {
//   return [...str1].reverse().join("");
// };

// console.log(concat("js", "beginner"));
// console.log(toUpper("hello world"));
// console.log(reverse("hello world"));

// //doSomething is a higher order function because it accept
// // op function as its pareameter
// const doSomething = function (str1, op) {
//   return op(str1);
// };

// console.log(doSomething("Hey", toUpper));
// console.log(doSomething("Hey", reverse));

// const students = [
//   {
//     id: 1,
//     age: 20,
//     name: "AAA BBB",
//   },
//   {
//     id: 2,
//     age: 18,
//     name: "AAA SSS",
//   },
//   {
//     id: 0,
//     age: 19,
//     name: "AAA CCC",
//   },
//   {
//     id: 7,
//     age: 26,
//     name: "AAA ASDSA",
//   },
//   {
//     id: 5,
//     age: 22,
//     name: "AAA DFSFSD",
//   },
// ];

// //Array.filter()
// const filteredStudents = students.filter((value) => {
//   return value.age < 25;
// });

// console.log(filteredStudents);

// // Array.sort()
// const numbers = [4, 5, 1, 0, 3, 2];
// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(numbers);

// // sort students by id
// students.sort((studentA,studentB) =>{
//     return studentA.id - studentB.id
// })
// console.log(students);

// //Array.splice
// const food = ["omelette", "Tom Yum Shrimp", "Steak", "Mushroom Soup"];
// // food.splice(1, 0, "Ramen");
// console.log(food);

// // ลบ Ramen โดยใช้ indexOf()
// let selectIndex = food.indexOf("Mushroom Soup");
// console.log(selectIndex);
