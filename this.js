////////////////////////////////////////////////////////////////THIS////////////////////////////////////////////////////
// this refers to any OBJECT that is executing in the current code.
//if THIS is inside a method in an object THIS still refers to the main object.
// if THIS is inside a regular function ,THIS refers to the window object in browser and global object in node.
// if THIS is inside a callback function as an argument to a method in an object ,THIS refers to the window object in browser and global object in node.
// if THIS is inside a cunstructor function,THIS refers to the new object that is created.

// const obj = { name1: "Y", id1: "12" };

// function get(fname, lname) {
//   this.fname1 = fname;
//   this.lname1 = lname;
//   this.tags = [5, 10, 20];
//   this.getdetails = function () {
//     const result = this.tags.forEach((item) => {
//       console.log(`${this.fname1} ${item} ${this.lname1}`);
//     });
//   };
// }

// const output = new get("y", "m");
// console.log(output.getdetails());

///////////////////////////////////////FUNCTION METHOD BIND
// const movies = {
//   firstName: "John",
//   lastName: "Wick",
//   tags: [1, 2, 3, 4, 5],
//   getfullName() {
//     this.tags.forEach(
//       function (Element) {
//         return console.log(`${this.firstName}  ${this.lastName} ${Element}`);
//       }.bind(this)
//     );
//   },
// };
// const result = movies.getfullName();

// const person = {
//   fname: "John",
//   lname: "Wick",
//   age: 20,
// };
// function getname(city, phone, num) {
//   return `First name  ${this.fname} Last name ${this.lname} ${city} ${phone} ${num}`;
// }
// console.log(getname.bind(person)()); //creating new function by using bind method
// console.log(getname.bind(person)("Nanded")); //creating new function and passing new arguments
// console.log(getname.call(person,"Nanded",6768)); //creating new function by using call method
// console.log(getname.apply(person, ["Nanded", "90909", "abc"])); //creating new function by using call method

//-------------------------------BOROWING OBJECT----------------------
// const person={
//   firstName:"yasin",
//   lastName:"nanded",
//   age:30
// }
// const movies = {
//   firstName: "John",
//   lastName: "Wick",
//   age: 20,
//   getfullName() {
//     return console.log(`${this.firstName} ${this.lastName} ${this.age}`);
//   }
// };
// console.log(movies.getfullName.bind(person)());
///////////////////////////////////////FUNCTION METHOD
// const movies = {
//   firstName: "John",
//   lastName: "Wick",
//   tags: [1, 2, 3, 4, 5],
//   getfullName() {
//     const mythis = this;
//     this.tags.forEach(function (Element) {
//       return console.log(`${mythis.firstName} ${Element} ${mythis.lastName}`);
//     });
//   },
// };
// const result = movies.getfullName();

// Bind() Method
// the bind() method creates a new function, when invoked,has the THIS sets  to propvided value.
// the bind()method allows an object to borrow a method from another object without making a copy ot that method.
// this is known as function borrowing in JavaScript.
// -----------------------------------------------------------------------------------------------------------------------------------
// Call () Method
// method is  a predefined javascript function method. it can be used to invoke(call ) a function with an owner object as the first argument.
// it can take multiple arguments-> object and function arguments one by one.

// -----------------------------------------------------------------------------------------------------------------------------------
// Apply () Method
// method is very similar to call function method. it is also used to invokke(call) a function.
// difference is it accepts the arguments in an array.
// it can take two arguments=> owner object and function arguments in an array.
