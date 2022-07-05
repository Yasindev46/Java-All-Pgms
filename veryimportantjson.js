// JSON object
// (its storing multiple objects in Array and multiple Array in one object that is called JSON ONJECT)
// (is using for security and its avoid hacking )
// (used for data transfer from api to front end)
const emp1={fname:"Yasin",lname:"Mulla",age:32,id:46, city:"Kolhapur"}
const emp2={fname:"Shaukat", lname:"Shaikh",age:27,Id:47, city:"Bidar"}
const emp3={fname:"Awes", lname:"Md",age:21,Id:48, city:"Aurangabad"}
const empdata1=[emp1,emp2,emp3]
// const empdata2=[emp1,emp2,emp3]
const details={empdata1}
// console.log(details.empdata1[0].fname)
// console.log(details.empdata1[0])
console.log(details.empdata1.filter(item=>item.city))