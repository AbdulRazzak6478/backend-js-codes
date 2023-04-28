function blocking_code() {
    for (let i = 0; i < 1000000000; i++) {
      //code
    }
  }
  
  console.log("Start of the file");
  setTimeout(function timer1() {
    console.log("timer 1 is done");
  }, 1000);
  blocking_code();
  let x = Promise.resolve("qureshi's promise");
  x.then(function fulfilled1(value) {
    console.log("the fulfill value is ", value);
  });
  blocking_code()
  let y = Promise.resolve("qureshi's promise");
  y.then(function fulfilled2(value) {
    console.log("the fulfill value is ", value);
  });
  blocking_code
  let z = Promise.reject("qureshi's promise reject");
  z.then(function fulfilled3(value) {
    console.log("the fulfill value is ", value);
  },(value)=>{
      console.log("reject the promise",value)
  });
  blocking_code()
  
  setTimeout(function timer2() {
    console.log("timer 2 is done");
  }, 1000);
  
  console.log("end of the file");
  
  // output :-
  // Start of the file
  // end of the file
  // the fulfill value is  qureshi's promise
  // the fulfill value is  qureshi's promise
  // reject the promise qureshi's promise reject
  // timer 1 is done
  // timer 2 is done
  