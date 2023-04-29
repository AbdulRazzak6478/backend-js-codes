
function fetchNextElement(){
    let i=0;
    let j=10;
    function innerElement(){
        i+=1;
        j=j+10;
        return i;
    }
    return innerElement;
}

const ele=fetchNextElement();
console.log("without calling ",ele);
console.log("with calling 1 :",ele());
console.log("with calling 2 :",ele());
console.log("with calling 3 :",ele());
console.log("with calling 4 :",ele());
console.log("with calling 5 :",ele());
console.log("with calling 6 :",ele());

const arr={func:ele};
console.log(arr);
console.log(arr.func());
console.log(arr.func());
console.log(arr.func());
console.log(arr.func());
