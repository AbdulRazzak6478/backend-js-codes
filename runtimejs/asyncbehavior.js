

let timer=setInterval(function exec(){
    console.log("hello world");
},1000)
function timeUsingLoop() {
    console.log("loop start");
    for (let i = 0; i < 10000000000;i++) {
      // console.log();
    }
    setTimeout(()=>{
        console.log("terminate process start");
        clearInterval(timer)
    },10000)
    // clearInterval(timer);
    console.log("loop end");
}
timeUsingLoop();