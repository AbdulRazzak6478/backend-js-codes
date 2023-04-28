
Promise.resolve("foo")
.then(function handler1(string){
    return new Promise(function process(res,rej){
        console.log("extending string");
        setTimeout(function exec(){
            string+="bar";
            res(string);
        },3000)
    })
}).then(function handler2(string){
    console.log("staring from promise is ",string);
    setTimeout(function exec2(){
        string+="baz";
        console.log("the complete string is ",string)
    },2000);
    return string;
})
.then(function handler3(value){
    console.log("the string is ",value);
})
// output
// extending string
// staring from promise is  foobar
// the string is  foobar
// the complete string is  foobarbaz