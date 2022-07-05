
// FINDING MAXIMUM NUMBER FROM AN ARRAY

const arr = [1,12,2,5,9];
let max=0;
/////////////------------------BY USING FORECH METHOD
arr.forEach((Element)=>{
   max=Element>max?Element:max;
})
console.log(max)
/////////////------------------BY USING REDUCE METHOD
const maxx = arr.reduce((acc, curr) => Math.max(acc, curr));
console.log(maxx);
/////////////------------------BY USING FOR LOOP
for (i=0;i<=arr.length;i++){
    if (arr[i]>max){
       max=arr[i]
    }
  }
console.log(max)

////////////////////////////////////((((OR)))))))))///////////////////////////
// const sum=arr.reduce((acc,curr)=> acc+curr);//////////////sum of array with reduce methode
// const sum=arr.reduce((acc,curr)=> acc+curr*curr*curr);//////////////sum of array with reduce methode
// const sum=arr.reduce((acc,curr)=> acc+ math.pow(curr,3));//////////////sum of array with reduce methode
// const sum=arr.reduce((acc,curr)=> acc+curr**3);//////////////sum of array with reduce methode
// console.log(sum);


// const arr=[4,2,6,6,3,3,6,,6,6,6,6,6,5]
// const incl=arr.filter((item)=>item==6).pop()
// const incl1=arr.filter((item)=>item==6).length
// console.log(incl)
// console.log("The Number",incl ,"is", incl1," Times Repeted")