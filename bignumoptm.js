// const addnum=(num1,num2)=>num1+num2
// console.log (addnum(77,50))
// console.log(addnum("Yasin", "Mulla"))

// const subnum=(num1,num2)=>(num1-num2)
// console.log(subnum(5,1))

// const multiply=(num1,num2,num3)=>(num1*num2*num3)
// console.log(multiply(2,3,5))

// function subn(num1, num2) {
//   return num1 - num2;
// }
// console.log(subn(5, 4));

//////////////////////////////////////////////////////////////////////////
// const name1=(a,b)=>{
// return a+b
// }
// console.log (name1("abc","xyz"));
// console.log(name1(12,12));

//////////////////////////////////////////////////////////////////////////
// const multiply1=(a,b)=>{
// return a*b
// }
// console.log(multiply1(12,2))

// let abc=(a)=>{
//     return a*5
// }
// console.log(abc(5))

//////////////////////////////////////////////////////////////////////////
// var car={name:"lambo", model:"lambo1", engine:500}
// console.log(car.model)

// var prsn={name:"yasin",
// id:46, city:"kolhapur"}
// console.log(prsn)
// console.log(prsn)

// let day="Monda"
// switch (day){
// case "Monday":
//     console.log("its a Monday")
//     break
//     default:
//         console.log("good day")
// }

// let day="Monday"
// if (day=="Monday")      console.log("Its a Monday")
// else    console.log("Good Day")

//////////////////////////////////////////////////////////////////////////
// var a=1;
// const awes=[1,2, 1,5]
// for(var i=0;i<awes.length;i++)
// {
//     a=a*awes[i]
// }
// console.log(a)
//////////////////////////////////////////////////////////////////////////

// num1>num2?num1:num2
// console.log(1<2<3) ////true
// console.log(2<3>1)////false
// console.log(1<3<2)///true
/////////////////////////////////////////////////////////////////////////
// making table
// const table1=(num)=>
// {
//     for(let i=1;i<=10;i++)
//     {
//         // console.log (i*num)    only table answer
//         // console.log(num,"x",i,"=",i*num) /////proper table 5*1=5
//         console.log(`${num} x ${i} = ${i*num}`) ////alternate to print with string `${variable name} string ${variable name}`
// }
// table1(5)
/////////////////////////////////////////////////////////////////////////////////
////fizzbuzz program
// var str=""
// for(let i=1;i<=100;i++)
// {
//     if (i%15===0)   str=str+(" FizzBuzz");
//     else if (i%3===0) str=str+ (" Fizz");
//     else if (i%5===0) str=str+(" Buzz");
//     else  str = str+ " "+i;
// }
//  console.log(str);
////////////////////////////////////////////////////////////////////////////////////
//  var time=16;
// if(time>=6 && time<12)
// {
//     console.log("Good Morning");
// }
// else if(time>=12 && time<=16)
// {
//     console.log("Good Afternoon");
// }
// else if(time>=17 && time<=19)
// {
//     console.log("Good evening");
// }
// else{
//     console.log("Good Night");
// }
/////////////////////////////////////////////////////////////////////////////////////
// let arr=[1,2,3,5,6]
// const a=arr.reduce((acc,curr)=>Math.min(acc,curr));
// console.log(a)
////////////////////////////////////////////////////////////////////////////////////
////0 to 9 print
// let i=0;
// while (i<10){
//     console.log(i)
//     i++
// }

// let b=5;
// let arr=[1,2,3,4,5,6,7,8,9,10]
// // for (let i=0;i<=10;i++){
//     //     console.log(b*i)
//     // }
//     arr.forEach(element => {
//         console.log(b*element)

//     });

// let arr=[3,6,5,6,7,8,9]
// // let a=arr.reduce((acc,cur)=>Math.max(acc,cur))
// // let a=arr.reduce((acc,cur)=>(acc>cur?acc:cur));
// let a=arr.reduce((acc,cur)=>(acc>cur?acc:cur));
// console.log(a)

// let str = "I AM FROM NANDED MAHARASHTRA INDIA";
// let b = str.split(" ");
// let c = b.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
// console.log(c);

// var c=""
// for (i=0;i<=b.length;i++){
//   if (b[i]>b[i+1]){
//     c=b[i]
//   }
// }
// console.log(c)

// let str="7756903575"
// let b=str.split("")
// let c=b.reduce((acc,curr)=> acc>curr?acc:curr)
// console.log(c)

// let c=""
// for(i=0;i<=b.length;i++){
//   if(b[i]>b[i+1]){
//   c=b[i]
//   }
// }

// let a=arr.reduce((acc,cur)=>Math.max(acc,cur))
// let a=arr.reduce((acc,cur)=>(acc>cur?acc:cur));
// console.log(a)

// const a=arr.reduce((acc,curr)=>b*acc);
// console.log(a)

///////////////////////////////////////////////////////////////////////////////
////1 to 10 print
// let i=0;
// while(i<10){
//     i++;
//     console.log(i)
// }
/////////////////////////////////////////////////////////////////////
// let i=20;
// do{
//     console.log(i)
//     i++;
// }

// while(i<30){
//     // i++;
//     // console.log(i)
// }

/////////////////////////////////////////////////////////////////////////
// const prsn={name:"yasin",
//  age:30,
//  height:5,
//  city:"kolhapur"};
// console.log (prsn.name)

// for(nothing in prsn){
//     console.log(prsn.city);
// }
//////////////////////////////////////////////////////////////////////////
// let role="guest"
// switch (role){
//     case "admin":
//     console.log("hello admin")
//     break;
//     case 234:
//         console.log("hello user")
//         break
//     case "guest":
//     console.log("hello user")
//     break
// default:
// console.log("no access")
// break
// }
///////////////////////////////////////////////////////////
// let role = "guest";
// switch (role) {
//   case "admin":
//     console.log("hello admin");
//     break;
//   case "user":
//     console.log("hello ");
//     break;
//   case "guest":
//     console.log("hello Guest");
//     break;
//   default:
//     console.log("no access");
//     break;
// }

// const arr=[1,2,3,4,5,6];
// for(a of arr){
//     console.log(a*10)
// }

// let a=0;
// const table=(num)=>{

//     for (let i=1;i<=10;i++)
//     // num*i;
//     // console.log(a)
//     console.log(num+"*"+i+"="+num*i)
//     // console.log(`${num} X ${i} = ${num*i}`)
// }
// table(15)

// const bignum=(num1, num2)=>{
// if (num1>num2)     console.log(num1+" is igger number")
// else               console.log(num2+" is bigger number")
// }
// bignum(15,8)
// let a=5;
// const arr=[1,2,3,4,5,6,7,8,9,10];
// for (let i=4;i<arr.length;i++){
// console.log(a*arr[i])
// }

///////// creating objects and manipulating,changing name or id
// const prsn={name:"Yasin", Lasname:"Mulla",id:46, email:"yasin@gmail.com" }
// console.log(prsn.id)
// console.log(prsn.name+" "+ prsn.Lasname)
// console.log(prsn.name+" "+ prsn.id)
// console.log(prsn)
// const prsn2={name:"Shaukat", Lasname:"Shaikh",id:47, email:"Shaukat@gmail.com" }
// console.log(prsn2.id)
// console.log(prsn2.name+" "+ prsn2.Lasname)
// console.log(prsn2.name+" "+ prsn2.id)
// let inid=46

// console.log(prsn2)

// const arr=[prsn,prsn2]
// if(inid==prsn.id ){
//     prsn.name="Yaseen"
// console.log(prsn)
// }
// else if(inid==prsn2.id ){
// console.log(prsn2)
// }
// console.log  (prsn.id==prsn2.id?"you are right":"you are wrong");
