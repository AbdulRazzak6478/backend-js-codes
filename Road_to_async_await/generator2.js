function* fetchContent(){
    console.log("lets get started from the inside the function");
   let x=10;
   yield 12;
   console.log("before the expression");
   let y=x+(yield 30);
   console.log("the value of Y is : ",y);
    return 10;
}
const iterator=fetchContent();
console.log("the 1st calling : ",iterator.next())
console.log("the 1st calling : ",iterator.next())
console.log("the 1st calling : ",iterator.next(13))
// let i=0;
// while(i<5)
// {
//     console.log((i+1)+" is  ",iterator.next())
//     i++;
// }