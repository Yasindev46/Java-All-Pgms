const array1=[1,2,3,4,5,6,7,8]
const newarray=[]

for (let i=0;i<array1.length;i++){
    if(array1[i]%2!=0){
        newarray.push(array1[i])
    }
    else{
        for (let j = array1.length-i; j>=0;j--){
            if(array1[j]%2==0){
                newarray.push(array1[j])
                break;
            }
        }
    }
    
}
console.log(newarray)