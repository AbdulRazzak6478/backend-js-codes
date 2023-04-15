

function hof(num,func)
{
    for(var i=0;i<num;i++){
        // console.log(i," ");
    }
    console.log(i);
    console.log(func);
    console.log("factorial of ",i,"is  :" ,func(i));

}

hof(4,function decrease(num){
    return num*num;
    // for(let i=num;i>=0;i--)
    // {
    //     // console.log(i," ");
    // }

})