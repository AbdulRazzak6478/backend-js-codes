
function hof(num,func)
{
    console.log(func);
    console.log(func);
    console.log("factorial of ",i,"is  :" ,func(i));
}

hof(4,function decrease(num){
    return num*num;
})
/* 
    1.inversion of control (due to callback passing controll to the function to execute my fucntion)
    2.callback hell (readibility problem)
*/
 