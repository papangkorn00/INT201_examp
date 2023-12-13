// function greeting(someone) {
//   return "Hello, " + someone;
// }

// let myName = "Papangkorn Kijsakulrat";
// myName = 10;

// console.log("Starting...");
// setTimeout(()=>{
//     console.log("more complex task finish");
// }, 10000) //10sec
// console.log(greeting(myName));
// setTimeout(()=>{
//     console.log("simple task finish");
// }, 2000) //2sec
// console.log("Good bye...");

// let msg = "I'm a student."
// console.log(msg);

// let a = null;
// console.log(a);
// let total;
// console.log(total);
// if (total === undefined) console.log("variable does not have initial value");
// if (a === null) console.log("variable has null value");

// const obj = {id: 1234 , name:'pen',price:100}

//week3

//weakly and dynamic type
// const num = 1;
// console.log(typeof num);

// num2 = true;
// console.log(typeof num2);

// if (typeof num2 === "boolean") console.log("num is a boolean type");

// let a = 1n; //bigint
// console.log(typeof a);

// let b = 1.1;
// console.log(typeof b);

// let c = `A-${b / 2 + 1}`;
// console.log(c);
// console.log(typeof c);

//implicit type conversion (String to boolean)
// if ("1") console.log("1 is a boolean true");
// else console.log("1 is not a boolean");

// if (0) console.log("value is zero");
// else console.log("value is not zero");

// if (2) console.log("value is two");
// else console.log("value is not two");

// let msg = "a";
// if (msg) console.log("an empty string");
// else console.log("not empty string");

//object type is a mutable
//sample array data type []
// const nums = [1, 3, 5, 7, 9];
// nums.push(9);
// nums[nums.length] = 11;
// console.log(nums.length);
// console.log(typeof nums);
// nums[0] = 11;
// console.log(nums);

//sample object data type: collection of properties {}
// const obj = { id: 1234, price: 100 };
// console.log(typeof obj);
// obj.id = 555;
// console.log(obj);

// function doSomething(activity) {
//   if (activity === null) return "activity is null";
//   if (activity === undefined) return "activity is undefined";
//   return `${activity} is done`;
// }
// console.log(typeof doSomething);
// let act1; //undefined
// let act2 = null; //null
// let act3 = "Js learning"; //String
// console.log(doSomething(act1)); //no activity
// console.log(doSomething(act2)); //no activity
// console.log(doSomething(act3)); // Js learning is done
// console.log(doSomething()); //no activity

//global scope = a,b,c
// let a = 1;
// const b = 2;
// var c = 3;

//block scope = d,e,f
// {
//d and e are local variables in block
//   let d = 3;
//   const e = 4;
//   var f = 6;

//   console.log("block area");
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// function scope = h,i,j
// function doIt() {

//   let h = 7;
//   const i = 8;
//   var j = 9; //no

// console.log("function area");
// console.log(a);
// console.log(b);
// console.log(c);

// block scope variables do not allow outside block
// console.log(d);
// console.log(e);
//   console.log(f);
// }

// doIt();
// console.log("global area");
// console.log(a);
// console.log(b);
// console.log(c);

// block scope variables do not allow outside block
// console.log(d);
// console.log(e);

// function scope variables do not allow outside block
// console.log(h);
// console.log(i);
// console.log(j);

// console.log(f);

//x is a global scope
// const x = 1;
// {
//   //x is a block scope
//   const x = 2;
//   console.log(x);
// }
// console.log(x);

// function doIt(y) {
//   // y is a function scope
//   console.log(y);
// }

// console.log(x);
// doIt(100);
// console.log(x);

// let msg = "hello";
// console.log(msg.charAt(0)); //String uses zero based index
// let msgs = [...msg]; //spread operator
// console.log(msgs);

// let n = '2';
// console.log(typeof n);
// console.log(typeof Number(n)); //explicit

//optional chaining ?.
// let a;
// //with array
// console.log(a?.[0]);

// //with object
// let b = { id: 1, fullname: "Poom" };

// console.log(b?.id);

// console.log(b["id"]);

// week4

//nullish
// const m = null;
// let n = m ?? 0; //equals to m!==null || m!== undefined ? m : 0
// console.log(n);

// let y = [] //array initialization with empty array
// let z = {} //object initialization with no property
// console.log(typeof y); //empty array (not null and not undefined)
// console.log(typeof z); //empty object (not null and not undefined)

//Math.random
// (n2 - n1 + 1) + n1
// let n1 = 25,
//   n2 = 100;
// const rand = Math.floor(Math.random() * (n2 - n1 + 1) + n1);
// console.log(rand);

// let str1 = 'ant'
// let str2 = 'Ant'
// let str3 = 'ANT'
// let str4 = 'ant'

// console.log(str1 === str2); //false
// console.log(str1 !== str3); //true
// console.log(str2 === str3); //false
// console.log(str1 === str4); //true
// console.log(str1 < str2); // false
// console.log("-------");
// console.log(str1.includes('nt'));
// console.log(str1.includes('Nt'));
// console.log(str1.toLowerCase().includes('Nt'.toLowerCase()));
// console.log(str1.toUpperCase().includes('nt'.toUpperCase()));

//compare object types including object and array data types

// //array and data type
// let x = [1, 3, true, "unknown"];
// let y = [1, 3, true, "unknown"];
// let z = x;
// console.log(x === y); //false
// console.log(x === z); //true
// console.log('-----------');
// //object data type
// let m = { id: 1, title: "pen" };
// let n = { id: 1, title: "pen" };
// let o = n;
// console.log(m === n);
// console.log(o === n);
// console.log('-----------');

// //primity type
// let a = 5;
// let b = 5;
// let c = a; //give data 5 from a to c
// console.log(a === b); //true
// console.log(a === c); //true

// console.log('a' + 2);