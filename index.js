// Code your solutions in this file
const writeCards=(arr)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        result.push("Thank you, "+arr[i]+", for the wonderful surprise gift!")
    }
    return result
}

const countDown=(num)=>{
    while(num>=0){
        console.log(num)
        num--
    }
}