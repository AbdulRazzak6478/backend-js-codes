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
    setTimeout(function () {
      let num = getRandom(10);
      if (num % 2 == 0) {
        console.log("Promise at the async code, to fulfilled1 , resolve");
        resolve(num);
        console.log("Promise at the async code, to fulfilled2 , resolve");
        resolve(num);
        console.log("Promise at the async code, to fulfilled3 , resolve");
        resolve(num);
      } else {
        console.log("Promise at the async code, to rejection1 , reject");
        reject(num);
        console.log("Promise at the async code, to rejection2 , reject");
        reject(num);
        console.log("Promise at the async code, to rejection3 , reject");
        reject(num);
      }
    }, 5000);
    console.log("after the code execution ");
  });
}

console.log("let starting");
// let p = promiseUsingLoops();
let p=promiseUsingTimeOut();
console.log("before the consuming the promise ,",p);
p.then(
  function resolver(value) {
    console.log("in the resolve function the value is ", value);
  },
  function rejection(value) {
    console.log("in the rejection function the value is ", value);
  }
);
p.then(
  function resolver(value) {
    console.log("in the resolve function the value is ", value);
  },
  function rejection(value) {
    console.log("in the rejection function the value is ", value);
  }
);
p.then(
  function resolver(value) {
    console.log("in the resolve function the value is ", value);
  },
  function rejection(value) {
    console.log("in the rejection function the value is ", value);
  }
);
setTimeout(()=>{
    console.log("after the consuming the promise ,",p);

},7000)
