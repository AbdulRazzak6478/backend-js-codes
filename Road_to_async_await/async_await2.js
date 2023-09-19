
async function steps(){
    console.log("lets starting ");
    const num = await 10;
    console.log("the number is : ",num)
    return Promise.resolve("process is done");
}

steps().then((value)=>{console.log("the end message is :",value)})

console.log("the end of global code");
