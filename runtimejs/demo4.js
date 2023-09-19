console.log("hi ,let start");

function timeUsingRuntimeFeature0(){
    console.log("timer start 0")
    setTimeout(function exec(){
        console.log("complete timer end 0");
    },5000);
}
function timeUsingRuntimeFeature1(){
    console.log("timer start 1")
    setTimeout(function exec(){
        console.log("complete timer end 1");
    },0);
}
function timeUsingRuntimeFeature2(){
    console.log("timer start 2")
    setTimeout(function exec(){
        console.log("complete timer end 2");
    },1000);
}
function timeUsingLoop() {
    console.log("loop start");
  for (let i = 0; i < 1000000000; i++) {
    // console.log();
  }
  console.log("timer start 4")
    setTimeout(function exec(){
        console.log("complete timer end 4");
    },3000);
  console.log("loop end");
}
timeUsingLoop();
timeUsingRuntimeFeature0();
timeUsingRuntimeFeature1();
timeUsingRuntimeFeature2();
timeUsingLoop();
console.log("bye");


// output
// loop start
// timer start 4
// loop end
// timer start 0
// timer start 1
// timer start 2
// loop start
// timer start 4
// loop end
// bye
// complete timer end 1
// complete timer end 2
// complete timer end 4
// complete timer end 4
// complete timer end 0