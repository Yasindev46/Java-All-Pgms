// var country = "India";
// function puterFunction() {
//   var fname = "Yasin";
//   var city = "Nanded";
//   function innerfunction() {
//     var lname = "Mulla";
//     console.log(fname + " " + lname);
//     console.log(city);
//     console.log(country);
//   }
//   innerfunction();
// }
// puterFunction();

// const arr = [1, 2, 3, 3, 5, 4, 5, 6, 7];
// const duplicate = (data) => {
//     return data.filter((item, index) => data.indexOf(item) === index);
//   // return [...new set(data)];
// };

// console.log(duplicate(arr));

// for (i=0;i<10;i++)
// {
//   console.log()
// }

/////////////////////BLOCK OF SCOPE///////////////////b & c is not defined
// if (100 < 200) {
//   var a = 100;
//   let b = 200;
//   const c = 300;
// }
// console.log(a, b, c);

for (let i = 1; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
  console.log(i * 2);
}

// after completion of all for loop it will be i value will be 5 so its printing i =5
// because of setTimeout it will hold

// we are tring to consdole i with timeout

// react JS
// yes
// functional
// useeffect with callback function and empty dependency array it will render once

// it will go in loop render  repeat again about var

// usememo(a, b)(1,2)
// a=3
// b=5
// yes it will sexecute becaoz it ill change the values
// it wont becauase it wll go to it memoriese

// component will accept component as argument and return a component

// use memo will memorise the result  it ll execute only inside variables
