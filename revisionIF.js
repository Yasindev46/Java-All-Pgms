// let a=10;
// let b=20;
// if(10>10){
//     console.log(a/b)
// }
// else if(10==5){
//     console.log(a*b)
// }
// else
// {
//     console.log(a+b)
// }


// let id=46
// const obj={
//     name:"Yasin",
//     id:46,
//     city:"Kolhapur"
// }

// if(obj.id==47){
//     console.log(obj.name)
//     console.log(obj.id)
//     console.log(obj.city)
// }
// else{
//     console.log("Please enter Correct id")
// // }


// let i=25;
//      if (i%3===0) console.log(" Fizz");
//     else if (i%5===0) console.log(" Buzz");
//     else              console.log("None");;



// // let i=57;
// //     if (i>=75)       console.log(" You are Pass with Distinction");
// //     else if (i>=55)  console.log(" You are Pass with A class");
// //     else if (i>=35)  console.log(" You are Pass with B class");
// //     else             console.log("Better Luck Next Time");;

// let a=2;
// let table;
// for(i=10;i<=1;i--)
// {
//     table=a*i;
//     console.log(table);
// }

// console.log(a*i);

// for(i=1;i<=5;i++){
// console.log("I Love India")
// }

// let i=10;
// console.log(i++)
// console.log(++i)
// // console.log(i)
// let a=5;
// const arr=[1,2,3,4,5,6,7,8,9,10];
// let table=arr.forEach(Element=>console.log(Element*a))
// console.log(table)

// const arr1=[1,2,4,5]

// const arr1=["John","Ram","Sam"]
// const result=arr1.map((item)=>`Mr ${item}`)
// const result=arr1.map((item)=>item*5)
// const result=arr1.map((item)=>"Mr " + item)
// console.log(result)

// const product=[
//         {title:"Adidas",size:"7", Color:"red" },
//         {title:"Reebok",size:"8", Color:"white" },
//         {title:"Nike",size:"9", Color:"red" },
//         {title:"Flash",size:"7", Color:"blue" },
//         {title:"R&B",size:"9", Color:"black" },
//         {title:"Ads",size:"7", Color:"red" },
//     ];
// const sorted1=product.sort((a,b)=>(a.title.toLowerCase>a.title.toLowerCase?1:-1));/////ascending order
// const sorted1=product.sort((a,b)=>(a.title.toLocaleLowerCase()>b.title.toLocaleLowerCase() ?-1:1));///////descending order
// const sorted1=product.sort((a,b)=>(a.size>b.size ?-1:1));///////descending order
// console.log(sorted1)
    // const fltr=product.filter((item)=> item.size=="9" && item.Color=="red" );
    // const fltr=product.filter((item)=> item.size==="8");
    //  const fltr=product.filter((item)=> item.title==="Reebok");
    //  const fltr=product.filter((item)=> item.size<8 && item.Color==="blue");
    // const fltr=product.filter((item)=> item.Color==="black" || item.Color==="blue");
    // console.log(fltr)

// const a=[1,2,3,4,5]
// const b=[6,7,8,9,10]

// console.log(a.concat(b))


// const arr1=[1,2,3,4]
// const reduced=arr1.reduce((acc,cur)=>acc+cur)
// console.log(reduced)


// const arr=[4,2,-6,5,3]
// const everyel=arr.every(a=> a%2==0);
// const everyel=arr.every(ab=> ab>0);
// console.log(everyel)

const arr=[4,2,-6,5,3,3,3,true,true]
const obj={name:"Yasin",Id1:"5",color:"red"}
// console.log(...arr)
const a=[...arr,{...obj}]
console.log(set(a))
