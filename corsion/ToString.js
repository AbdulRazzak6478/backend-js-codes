
var x=15;
console.log(typeof(x).toString());
console.log(typeof x);
console.log(3<4==1); // boolean conversion
console.log( typeof String(1234),String(1234));
console.log( typeof Number("1234"),Number("1234"));
console.log( typeof Number("abcd"),Number("abcd"));
console.log( typeof Number("0xa"),Number("0xa")); //->10
let y=NaN;
console.log(isNaN("kjhgfd"));
console.log(isNaN(y));
console.log(isNaN('12344'));
console.log(typeof(x) ==='number' && x!==x);
console.log((-0)==0);
console.log(typeof 1..toString(), 1..toString());
console.log([6]-1);// 5
console.log(["0"]-1);// -1
console.log(0-[]); //0
console.log(Number.isNaN("asdfg"));
console.log(Number.isNaN(y));
console.log(0-"010");
console.log(""-{});// NaN
console.log(""+{});// object object
console.log(""+[12,null,"jhgdfg",0987]);
let obj4={
    x:10,
    y:12,
    toString(){
        return 14;
    },
    valueOf(){
        return 17;
    }
}
console.log("20" - obj4);
let f= function fun(){
    console.log("hello world");
}
let g= function(){
    console.log("hello world2");
}
// fun()  //not define
f();
g();
var f2="1234";
let f21 =()=>{
    console.log("function expression");
}
f21();
console.log(f2);