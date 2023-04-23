function getRandom(max) {
  return Math.floor(Math.random() * max);
}
// console.log(getRandom(10));
function promiseUsingLoops() {
  return new Promise(function exec(resolve, reject) {
    console.log("inside the executor function");
    console.log("Before the sync code execution");
    for (let i = 0; i < 1000000000; i++) {}
    let num = getRandom(10);
    if (num % 2 == 0) {
      console.log("Promise at the function to call resolve");
      resolve(num);
    } else {
      console.log("Promise at the function to call reject");
      reject(num);
    }
    console.log("after the code execution ");
  });
}
function promiseUsingTimeOut() {
  return new Promise(function exec(resolve, reject) {
    console.log("inside the executor function");
    console.log("Before the sync code execution");
    setTimeout(function (){
        let num = getRandom(10);
        if (num % 2 == 0) {
          console.log("Promise at the async code, to fulfilled , resolve");
          resolve(num);
        } else {
          console.log("Promise at the async code, to rejection , reject");
          reject(num);
        }
    },5000);
    console.log("after the code execution ");
  });
}

console.log("let starting");
// let p=promiseUsingLoops();a
let p=promiseUsingTimeOut();
// console.log("promise Before executing ",p);
console.log("promise after executing ",p);