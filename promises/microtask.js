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
          setTimeout(()=>{console.log("in the resolve function to fulfilled")},2000)
          resolve(num);
        } else {
            console.log("Promise at the async code, to rejection1 , reject");
            setTimeout(()=>{console.log("in the rejection function to rejected")},2000)
          reject(num);
        }
      }, 4000);
      console.log("after the code execution ");
    });
  }
  
  console.log("let starting");
  // let p = promiseUsingLoops();
  let p=promiseUsingTimeOut();
  console.log("before the consuming the promise ,",p);
  // p.then(
  //   function resolver1(value) {
  //     console.log("in the resolve function1 the value is ", value);
  //     setTimeout(()=>{
  //       console.log("timer is resolve")
  //     },0)
  //   },
  //   function rejection1(value) {
  //     console.log("in the rejection function1 the value is ", value);
  //     setTimeout(()=>{
  //       console.log("timer is reject")
  //     },0)
  //   }
  // );
  p.then(
    function resolver2(value) {
      console.log("in the resolve function2 the value is ", value);
    },
    function rejection2(value) {
      console.log("in the rejection function2 the value is ", value);
    }
  );
  // p.then(
  //   function resolver3(value) {
  //     console.log("in the resolve function3 the value is ", value);
  //   },
  //   function rejection4(value) {
  //     console.log("in the rejection function3 the value is ", value);
  //   }
  // );
  setTimeout(()=>{
      console.log("after the consuming the promise ,",p);
},6000)
  