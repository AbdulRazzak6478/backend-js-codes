function* fetchContent(){
    console.log("lets get started from the inside the function");
    console.log("1st breakpoint ");
    yield 1;
    console.log("after the 1st break point ")
    console.log("2nd breakpoint ");
    yield 2;
    console.log("after the 2nd break point ")
    console.log("3rd breakpoint ");
    yield 3;
    console.log("after the 3rd break point ")
    console.log("4th breakpoint ");
    yield 4;
    console.log("after the 4th break point ")
    console.log("return statement");
    return 10;
}
const iterator=fetchContent();
let i=0;
while(i<9)
{
    console.log((i+1)+" is  ",iterator.next())
    i++;
}