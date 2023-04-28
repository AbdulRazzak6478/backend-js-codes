function downloadData(url) {
  return new Promise(function download(res, rej) {
    console.log("Downloading is started ");
    setTimeout(function downloaded() {
      console.log("downloading is completed from the given  url ", url);
      const content = "ABCDEFG";
      res(content);
    }, 5000);
  });
}

let x = downloadData("www.xyz.com");

let y = x.then(
  function fulfilled(content) {
    console.log("after downloading the content is ", content);
    const res="SUCCESS";
    return res;
  },
  function rejection(content) {
    console.log("after downloading in rejection the content is ", content);
  }
);
console.log("the .then function  return new promise ,which is  ",y)
y.then(function fulfilledResponse(response){
    console.log("the response of this downloading is ",response);
})

// output:-
// Downloading is started 
// the .then function  return new promise ,which is   Promise { <pending> }
// downloading is completed from the given  url  www.xyz.com
// after downloading the content is  ABCDEFG
// the response of this downloading is  SUCCESS