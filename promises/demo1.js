console.log("Start of the file");
setTimeout(function timer1(){
    console.log("timer 1 is done");
}, 1000);
for(let i=0;i<10000000000;i++)
{
    //code
}
let x = Promise.resolve("qureshi's promise");
x.then(function fulfilled(value){
    console.log("the fulfill value is ",value);
})
setTimeout(function timer2(){
    console.log("timer 2 is done");
}, 1000);

console.log("end of the file");


// output :-
// Start of the file
// end of the file
// the fulfill value is  qureshi's promise
// timer 1 is done
// timer 2 is done 
