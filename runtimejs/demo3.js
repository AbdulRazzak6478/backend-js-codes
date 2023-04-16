console.log("hi ,let start");

function timeUsingRuntime(){
    console.log("timer start")
    setTimeout(function exec(){
        console.log("complete timer end");
    },5000);
}
function timeUsingLoop() {
    console.log("loop start");
  for (let i = 0; i < 1000000000; i++) {
    // console.log();
  }
  console.log("loop end");
}
timeUsingLoop();
timeUsingRuntime();
timeUsingLoop();
console.log("bye");
