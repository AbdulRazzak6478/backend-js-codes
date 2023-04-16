console.log("hi ,let start");

function timeUsingRuntime(){
    console.log("timer start")
    setTimeout(function exec(){
        console.log("timer end");
    },5000);
}
function timeUsingLoop() {
  for (let i = 0; i < 1000000000; i++) {
    // console.log();
  }
}
timeUsingLoop();
timeUsingRuntime();
timeUsingLoop();
console.log("bye");
