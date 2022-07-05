const result=(a,b,c,d,e)=>{
    return sum=(a+b+c+d+e)/5 
}
console.log("Average of Given 5 Numbers is",result(1,2,3,4,5))



const max=(a,b,c,d,e)=>{
let arr=[a,b,c,d,e]
var maximum=0;
for(i=0;i<=arr.length;i++){
    if (arr[i]>maximum){maximum=arr[i]}
    else{maximum=maximum}
}
return maximum
}
console.log("Maximum no from given 5 Numbers is",max(10,50,20,30,20));



