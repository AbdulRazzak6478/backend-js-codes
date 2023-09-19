console.log((12=="12"));

console.log(("NaN"==NaN));//->false
console.log((12=={valueOf(){return 12}}));//->true
console.log((-0)=='-0'); //-> false
console.log((12+undefined));
console.log((12-'120'));
console.log((12-"kjhg"));
let obj1={x:12}
let obj2={x:12}
let obj3={x:12}
console.log(obj1===obj2);
console.log({x:12}==={x:12});