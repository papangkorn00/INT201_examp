// 1.Create object by literal {}
const student = {
  id: 65130500041,
  firstname: "Papangkorn",
  lastname: "Kijsakulrat",
};

console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(typeof student);
console.log(Object.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));

const lecturer = { id: 1234, firstname: "Papangkorn", lastname: "Kijsakulrat" };
console.log(Object.prototype.isPrototypeOf(lecturer));

// way to get property value
const someoneId = student.id; //object.key
const someoneFirstName = student["firstname"]; //object['key']
console.log(someoneId);
console.log(someoneFirstName);

//way to assign/set property value
student.id = 651305040505;
student["firstname"] = "Poom";
console.log(student.id);
console.log(student["firstname"]);

// dynamic properties
// add new property
student.email = "papangkorn.kijs@kmutt.ac.th";
student["address"] = "Bangkok, Thailand";
console.log(student);

//delete existing properties
delete student.email;
console.log(student);

student.advisor = lecturer;
console.log(student);

console.log(student.advisor.firstname);
console.log(student["advisor"]["firstname"]);

student.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

console.log(student.getFullname());

// 2.Create object with constructor function
function Person(id, firstname, lastname) {
  this.id = id;
  this.fullname = `${firstname} ${lastname}`;
}

const p1 = new Person(111, "Joe", "Barbaro");
const p2 = new Person(222, "Duk", "Smith");
const p3 = new Person(333, "Jing", "Yooo");
console.log(p1);
console.log(p2);
console.log(p3);

// 3.create object with class
class Student {
  constructor(id, fn, ln) {
    this.id = id;
    this.firstname = fn;
    this.lastname = ln;
  }
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
const st1 = new Student(111, "Oreo", "Aroi");
const st2 = new Student(112, "Poom", "Meen");
console.log(st1);
console.log(st2);
console.log(st1.getFullname());
console.log(st2.getFullname());
console.log(Object.prototype.isPrototypeOf(st1));
console.log(Student.prototype.isPrototypeOf(st1));

// 4.Create object by using Object.create()
const undergratSt1 = Object.create(st1);
console.log(undergratSt1);
console.log(undergratSt1.id);
console.log(undergratSt1.firstname);
console.log(undergratSt1.lastname);
console.log(Object.prototype.isPrototypeOf(undergratSt1));
console.log(Student.prototype.isPrototypeOf(undergratSt1));
undergratSt1.project = "web application";
console.log(undergratSt1);

const circle = {
  radius: 2,
  //   area: function () {
  //     return Math.PI * Math.pow(this.radius, 2);
  //   },
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  equals(compareCircle) {
    return this.radius === compareCircle.radius;
  },
};
console.log(circle);
console.log(circle.area());
console.log(circle.equals({ radius: 2 }));
console.log(circle.equals({ radius: 3 }));

console.log(JSON.stringify(circle));
if (JSON.stringify(circle) === "{}") console.log("empty object");
else console.log("not empty object");

// Object Destructuring
const book = {
  isbn: "12345678",
  title: "introduction to javascript",
  author: { firstname: "Adam", lastname: "Lee" },
  publisher: {
    name: "HarperCollins",
    location: "USA",
  },
};

const { title } = book;
console.log(title);

const { publisher: publisherName, isbn: isbn_book } = book;
console.log(publisherName);
console.log(isbn_book);

const {
  publisher: {
    location: { country },
  },
} = book;
console.log(country);
