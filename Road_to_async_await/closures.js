
function fetchNextElement(arr){
    let i=0;
    let j=10;
    function next(){
        if(i=== arr.length)return {value:undefined,done:true};
        i+=1;
        j=j+10;
        return {value:i,done:false};
    }
    return {next};
}

const ele=fetchNextElement([1,2,3,4,5,6,7]);
console.log("without calling ",ele);
console.log("with calling 1 :",ele.next());
console.log("with calling 2 :",ele.next());
console.log("with calling 3 :",ele.next());
console.log("with calling 4 :",ele.next());
// console.log("with calling 5 :",ele.next());
// console.log("with calling 6 :",ele.next());
// console.log("with calling 7 :",ele.next());
// console.log("with calling 8 :",ele.next());

const arr={func:ele.next};
console.log(arr);
console.log(arr.func());
console.log(arr.func());
console.log(arr.func());
console.log(arr.func());
