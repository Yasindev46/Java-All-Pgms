// const arr=[1,5,8,9,10,10,20];
// const result =arr.filter((item)=>item%2===0)//////fining even number
// console.log(result)//////result will come in array
// callback is function to be passed an argument in other function

//////////////////////////////////////////////////////////filter method/////////////////////
// const arr1=[1,2,3,4,5]
// const result=arr1.filter((item)=>item%2===0)
// console.log(result)

/////////////////////////////////////////////////////////MULTIFILTER FILTER////////////////
// const product = [
//   { title: "Adidas", size: "7", Color: "red" },
//   { title: "Adidas", size: "8", Color: "black" },
//   { title: "Adidas", size: "9", Color: "blue" },
//   { title: "Adidas", size: "7", Color: "red" },
//   { title: "Reebok", size: "8", Color: "white" },
//   { title: "nike", size: "9", Color: "red" },
//   { title: "Flash", size: "7", Color: "blue" },
//   { title: "R&B", size: "8", Color: "black" },
//   { title: "ads", size: "7", Color: "red" },
// ];

// const result = product.filter(
//   (item) => item.title === "Adidas" && item.Color === "red" && item.size === "7"
// );

// console.log(result);

// const fltr=product.filter((item)=> item.size==8);
// const fltr=product.filter((item)=> item.size==="8");
//  const fltr=product.filter((item)=> item.title==="Reebok");
//  const fltr=product.filter((item)=> item.size<8 && item.Color==="blue");
// const fltr=product.filter((item)=> item.Color==="black" || item.Color==="blue");
// console.log(fltr)

// const arr = [1, 2, 10, 10, 4, 10, 6, 10];
// console.log(arr.filter((item) => item === 10).length);




///////////////////////////////////////////////////////////////ASCENDING OR DISCENDING ORDER
// const sorted1=product.sort((a,b)=>(a.Color.toLocaleLowerCase>a.Color.toLocaleLowerCase?1:-1));/////ascending order
// const sorted1 = product.sort((a, b) =>
//   a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase() ? -1 : 1
// ); ///////descending order
// const sorted1=product.sort((a,b)=>(a.size>b.size ?-1:1));///////descending order
// console.log(sorted1);








//////////////////////////////////////////////////////////SEARCING ITEMS FROM ARRAY
// const arr1=["yasin","shaukat","awes"]
// const result=arr1.filter((item)=>item==="yasin")
// console.log(result)
//////////////////////////////////////////////////////////MAP Method/////////////////////////
// const arr1=[1,2,4,5]
// const result=arr1.map((item)=>item*5)
// console.log(result)
// console.log(arr1)

// const arr1=["yasin","shaukat","awes"]
// const result=arr1.map((item)=>`Mr ${item}`)
// console.log(result)

// const arr1=["yasin","shaukat","awes"]
// const result=arr1.map((item)=>item.slice(2,2))
// console.log(result)

///////////////////////////////////////////////Method reduced-------return single value
// const arr1=[1,2,3,4]
// const reduced=arr1.reduce((acc,cur)=>acc+cur)
// console.log(reduced)

// const arr1=[1,2,3,4]
// const reduced=arr1.reduce((acc,cur)=>{ return acc/cur},1);
// console.log(reduced)

///////////////////////////////////////SORT METHOD ASCENDING OR DISCENDING
// const arr=[5,6,7,8,9]
// const sorted=arr.sort((acc,cur)=>(acc>cur?-1:1));
// const concated=(arr.concat(arr1))
// console.log(concated)

///////////////////////////////////////////////////CONCAT TWO ARRAYS IN ONE
// const arr=[1,3,4,2,6]
// const arr1=[7,8,9,10]
// const concated=(arr.concat(arr1))
// console.log(concated)

// const a = "MADAM";
// console.log(a.split("").reverse().join() === a);
////////////////////////////////////////////////////POP METHOD will remove last element and store in other variable
// const arr = ["Yasin", "Sultan", "Nihal", "Rafik", "Sachin"];
// console.log(arr.splice(2,0,"A","B"))
// console.log(arr.sort().reverse().reduce((acc,cur)=>acc*cur))
// console.log(arr.map((item) => "hi" + " " + item));
// console.log(arr.forEach((item)=>item*5))
// const popped=arr.pop()
// console.log(arr[4]);
// console.log(arr.includes("Sachin"))
// const a=(arr.pop())
// console.log(a)
// console.log(arr)
// console.log(arr)
// console.log(popped)

////////////////////////////////////////////////////PUSH METHOD will add element in last position
// const arr=[1,3,4,2,6,7,6]
// const pushed=arr.push(9,10,11)
// console.log(arr)

////////////////////////////////////////////////////SHIFT METHOD will remove first element from array
// const arr=[1,3,4,2,6,7,6]
// const shifted=arr.shift()
// console.log(arr)

////////////////////////////////////////////////////UNSHIFT METHOD will add first element in array
// const arr=[1,3,4,2,6,7,6]
// const shifted=arr.unshift(10)
// console.log(arr)

////////////////////////////////////////////////////REVERSE METHOD will reverse element in array
// const arr=[1,3,4,2,6,7,6]
// const reversed=arr.reverse()
// console.log(arr)

////////////////////////////////////////////////////USING MULTIPLE Methods
// const arr=[1,2,3,4,5,6]
// let result1=arr.forEach((item)=>console.log(item*5));
// console.log(result1);
// let result1=arr.filter((item)=>item%2==0).map((item)=>item*10);
// let result2=result1.reduce((acc,cur)=>acc+cur);
// console.log(result1);
// console.log(result2);

/////////////////////////////////////////////
// const alpha=["a","b","c","d","e","f","g","h"]
// console.log(alpha.slice(2,5))////////////////////////SLICE WILL REMOVE ELEMENTS FROM TO ARRAY AND WONT CHANGE THE ARRAY
// console.log(alpha.splice(2,2))///////////////////////SPLICE WILL REMOVE ELEMENTS FROM HOW MANY ELEMENTS FROM ARRAY AND CHANGE THE ARRAY
// console.log(alpha.splice(2,2,"z","y"))///////////////////////SPLICE WILL REMOVE ELEMENTS FROM ARRAY AND REPLACE THE ELEMENTS
// console.log(alpha.splice(2,0,"z","y"))///////////////////////SPLICE WILL ARRAY AND REPLACE THE ELEMENTS
// console.log(alpha)

// function mul(a, c) {
//   return a + c;
// }

// console.log(mul("2", "2"));
////////////////////////////////////Spread Operator////////////////////
// it is used to display all the elements of an array outside the array
// const arr=[1,3,4,2,6]
// console.log(...arr);
///////////////////////////////////Adding 2 Arrays using SPREAD///////////
// const boys=["Sam","Ram","John"]
// const girls=["Rita","mona","Seema"]
// const student=[...boys,...girls]
// const student1=boys.concat(girls)
// console.log(student)
// console.log(student1)

// const arr=[3,4,2,6]
// let result=arr.reduce((acc,cur)=>acc+cur)/5
// console.log(result);
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
////////////////////////////////////REST Operator/////////////
// it is used to add elements of an array inside the calling function as argument
//

/////////////////////////////////////////////////EVERY ELEMENT will check with every element and check condition gives ans TRUE or FALSE
// const arr=[4,2,6,5,3]
// const everyel=arr.every(a=> a%2==0);
// const everyel=arr.every( a>0);
// console.log(everyel)
/////////////////////////////////////////////////SOME ELEMENT will check with some of element and check condition gives ans TRUE or FALSE
// const arr=[4,2,6,3,5]
// const everyel=arr.some(a=> a%2==0);
// const everyel=arr.some(a=> a>0);
// console.log(everyel)
/////////////////////////////////////////////////INCLUDE ELEMENT will check with every element and if its available then gives ans TRUE or FALSE
// const arr=[4,2,6,"Y",3,5]
// const incl=arr.includes("x");
// console.log(incl)
///////////////////////////////////////////////FIND will give 1st element which match the condition
// const arr=[2,6,"Y",3,5]
// const incl=arr.find((item)=> item=="Y");
// console.log(incl)
///////////////////////////////////////////////INDEX OF will give index of element which match the condition
// const arr = [4, 2, 6, "Y", 3, 6, 5];
// const incl = arr.indexOf("Y");
// console.log(incl);
// const arr=[4,2,6,6,3,3,6,,6,6,6,6,6,5]
// const incl=arr.filter((item)=>item==6).pop()
// const incl1=arr.filter((item)=>item==6).length
// // console.log(incl)
// console.log("The Number",incl ,"is", incl1," Times Repeted")
///////////////////////////////////////////////LAST INDEX OF will give index of last element which match the condition
// const arr=[4,2,6,"Y",3,6,5]
// // const incl=arr.lastIndexOf(6);
// const incl=arr.findIndex[4]
// console.log(incl)

//////////////////////////////////////////////JOIN will join each element depend on our requierement
// const arr=["Y","A","S","I","N"]
// let incl=arr.join("");
    //  incl=arr.join("*");
    //  incl=arr.join("-");
    //  incl=arr.join("$");
// console.log(incl)
//////////////////////////////////////////////////////
// const arr=new Array(8);
// console.log(arr.fill(3,2,4))

// const arr=[4,2,6]
// console.log(arr.sort((acc,cur)=>(acc<cur?-1:1)));
// const arr1=["yasin","shaukat","Awes"]
// console.log(arr1.sort((acc,cur)=>(acc<cur?1:-1)));

//////////////////////////////////////////////JSON OBJECT///////////////////
// const bikes=[
//     {Name: "Yamaha",
//     Model:2020,
//     Color:"Red"
//     },
//     {Name: "Suzuki",
//     Model:2021,
//     Color:"Red"
//     },
//     {Name: "Honda",
//     Model:2020,
//     Color:"black"
//     }
// ];
// console.log(bikes)
// console.log(bikes.filter(item=>item.Model===2020));
// console.log(bikes.filter(item=>item.Color==="red"));
// console.log(bikes.map(item=>item.Name+"-"+item.Model+"-"+item.Color));
// console.log(bikes.map(item=>(`${item.Name} No1`)));

// function move(array,index,offset)
// {
// if(index>arr.length)
// {

//     console.log("please provide a valid offset value ")
// }
// else{
// const newindex=index+offset;
// if(newindex<0 || newindex > arr.length){
//     console.log("please provide a valid offset value ")
//     return;
// }
// const updated=[...arr];
// const removedelem=updated.splice(index,1)[0];
// updated.splice(newindex,0,removedelem)
// return updated;
// }

// const arr=["a","b","c","d","e"]
// const resulta=move(arr,3,2)
// console.log(resulta)
// let a=arr.splice(3,1)
// let b=arr.splice(2,1)
// console.log(a)
// console.log(b)
// console.log(arr)

// //////////////////////////////////////reverse a number or string
// function reversea(a) {
//   const b = a.split("").reverse();
//   console.log(...b);
// }
// reversea("123jjghghk");
// reversea("1jhgjhghjg");

// let a="ABC"
// console.log( a.split())
// console.log(a.)

//////////////////////////////////DEFAULT PARAMETER//Chnaging Parameter//////////////a parameter whose value is assigned in the function body itself is known as default parameter.
// it should be at the end of all parameters****if no values is passed it ill take default value***if you give any argument value then it ll override to default value.
// function calculate()
// const calc = (am, tm, rt = 0.1) => {
//   const result = am * tm * rt;
//   return result;
// };
// console.log(calc(10000, 1, 0.2));

/////////////////////////////////REST OPERATOR/////////////////////////////...c is rest operator which takes remaining values from inputs/users. it should be written in last.it stores in array

// const getsum = (a, b, ...c) => {
//   console.log(c);
//   const r = c.reduce((acc, cur) => acc + cur);
//   console.log(r);

//   return a + b + r;
// };
// console.log(getsum(10, 12, 4, 2, 2, 2));

////////////////////////////////////////////////////MAX VALUE using array and function//////////////////////
// const getsum = (...c) => {
//   const r = c.map((item) => item + "a");
// const r = c.reduce((acc, cur) => Math.max(acc, cur));
//   console.log(c);
//   return r;
// };
// console.log(getsum(12, 15, 8,2));
// console.log(getsum("A", "b", "C"));

///////////////////////////////////////////////////////////string PALINDROM
// function checkp(string) {
//   let len = string.length;
//   for (let i = 0; i < len / 2; i++)
//     if (string[i] != string[len - 1 - i]) {
//       return "this is not palendrome";
//     } else return "This is palendrome";
// }
// console.log(checkp("radaar"));

///////////////////////////////////////////////////////GARBAGE COLLECTION//////////////////////////////////////
//You have no control over when the garbage collections run
//It all happens in background
//it basically deallocates the memory of any unused variables or constant.

//////////////////////////////////////////////////////FACTORY FUNCTION///////////////////////
//if objects have logic you need to create objects with factory or constructor functions.
//factory production: just like factory this function produces objects.
//function named in camelCase.
// function getarea(radius) {
//   return {
//     radius: radius,
//     getcircle() {
//       return 3.14 * radius * radius;
//     },
//   };
// }
// const fresult = getarea(5);
// console.log(fresult);

// function getName(fname, lname) {
//   return {
//     fname,
//     lname,
//     fullName() {
//       return this.fname + " " + this.lname;
//     },
//   };
// }
// const result = getName("Y", "M");
// console.log(result);
// console.log(result.fullName());

// function getName(firstname, lastname) {
//   this.fname = firstname;
//   this.lname = lastname;
//   this.getfullname = function () {
//     return this.fname + this.lname;
//   };
//   return this;
// }
// const result = new getName("y", "m");
// console.log(result.getfullname());
//////////////////////////////////////////////////////CONSTRUCTOR FUNCTION///////////////////////
// function Getcircle(radius) {
//   this.r = radius;
//   this.b = 10;
//   this.draw = function () {
//     return this.b * this.r;
//   };

//   return this;
// }
// const newobj = new Getcircle(5);
// console.log(newobj);
// console.log(newobj.draw());

// function Com(radius, pi) {
//   this.a = radius;
//   this.b = pi;
//   this.draw = function () {
//     return this.a * this.b;
//   };
//   return this;
// }
// const result = new Com(5, 3.14);
// console.log(result.draw());

////////////////////////////////////////////////////Palindrome word
// const str = "MADAM";
// console.log(str.split());
// console.log(str.split().reverse());
// const result = str.split().reverse().join();
// str === result
//   ? console.log("This Is Palendrome")
//   : console.log("This Is Not Palendrome");

// function getname(name, last) {
//   this.fname = name;
//   this.lname = last;
//   this.tag = [1, 2, 3];
//   this.getfullname = function () {
//     console.log(this);
//     this.tag.forEach(function () {
//       return console.log(this);
//     });
//   };
// }
/////////////////////////////////////////////////Example2
// function get(name, city) {
//   this.fname = name;
//   this.citi = city;
//   this.arr = [{ lname: "M", country: "India" }];
//   this.getf = function () {
//     // const c = this;
//     this.arr.forEach(
//       function (item) {
//         return console.log(
//           `${this.fname} ${item.lname} ${this.citi} ${item.country}`
//         );
//       }.bind(this)
//     );
//   };
//   return this;
// }
// const a = new get("Yasin", "Nanded");
// console.log(a.getf());

// const arr = [1, 2, 3, [4, 5, [6, [8]]]];
// const a = arr.splice(3, 1);
// const b = arr.splice(5, 1);
// const c = arr.splice(6, 1);
// console.log(arr.join());
// console.log(arr.flat(Infinity));

// console.log([...arr,...a,...b,...c]);
// const arr = [1, 2,4, 3, 3, 4, 5, 6, 3];
// const a=(arr.filter((acc,cur)=>acc===cur?1:-1))
// console.log(a)

// let fiz = 0;
// var str = "";
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) str = str + "Fiz";
//   else if (i % 5 === 0) str = str + " " + "Buz";
//   else if (i % 4 === 0) str = str + " " + "FizBuz";
//   else str = str + " " + i;
// }
// console.log(str);
////////////////////////////////////////////////////////////////THIS////////////////////////////////////////////////////
// this refers to any OBJECT that is executing in the current code.
//if THIS is inside a method in an object THIS still refers to the main object.
// if THIS is inside a regular function ,THIS refers to the window object in browser and global object in node.
// if THIS is inside a callback function as an argument to a method in an object ,THIS refers to the window object in browser and global object in node.
// if THIS is inside a cunstructor function,THIS refers to the new object that is created.

/////////////////Intervie questions//////
// How to add nested webpage into a webpage?--->by using Iframe we can add any nested page in our webpage.
// What is display flex?-----> for making webcontent responsive we use flex
// difference between visiblity hidden and display none?------>display none->the content along with its space will not be displayed where as in visibility hidden the content will not be displayed but the space will be accupied / remain constant.
// what is z-index----------> when 2 elements are overlapped then it will give priority to higher index value.
// what a different types of css positions---->statis, absolute,relative,fixed, sticky.
// static---->This is default position of any element when its loan on page.
// absolute--->will start from its web page start position/ parent position
// relative---> start from its landed position.
// fixed----> its fixed to webpage.
// sticky----> its stick to perticular position given.or else inside the div.
// GRID model--->

// const arr = [
//   { name: "laptop", price1: 20, available: null },
//   { name: "mobile", price2: 60, available1: null },
//   { name: "jacket", price2: 20, available2: "yes" },
// ];
// const arr1=[1,2,3,4]
// const arr2=["a","b","c","d"]
// arr.map((item) => {
//     console.log(item.name);
// });

// const obj={ name: "laptop", price: 20, available: null }
// console.log(obj.available)

// json={
// a:[
//     {name:"home",city:"nanded", no:123},
//     {name:"yasin",city:"kolhapur", no:123}
//   ],
// b:[
//     {name:"home",city:"nanded", no:123},
//     {name:"yasin",city:"kolhapur", no:123}
//   ],
// }
// console.log(json.a[0].city)

// json = {
//   store: [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: {
//         rate: 3.9,
//         count: 120,
//       },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: {
//         rate: 4.1,
//         count: 259,
//       },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: {
//         rate: 4.7,
//         count: 500,
//       },
//     },
//   ],
// };
// console.log(json.store[0].category);

// const a="Hello PDAC"
// const b=((a.split(" ")));
// console.log(a.length)
// console.log(b)
