function downloadData(url) {
    return new Promise(function down(res,rej){
        console.log("started downloading from the given URL ,", url);
        setTimeout(function download() {
          console.log("downloading is completed from the url ", url);
          const content = "ABCDEF";
          res(content);
        }, 5000);
    })
}
  
function writeFile(content) {
    return new Promise(function writing(res,rej){
        console.log("started writing the file with the content ", content);
        setTimeout(function write() {
          console.log("writing file is completed ");
          const file = "file.text";
          res(file);
        }, 3000);
    })
}
  
function uploadFile(file, newURL) {
    return new Promise(function uploading(res,rej){
        console.log("started uploading the file in the newURL which is ", newURL);
        setTimeout(function upload() {
          console.log("uploading the ",file," is completed in the ", newURL);
          const response = "SUCCESS";
          res(response)
        }, 4000);
    })
}

function doAfterReceiving(value)
{
    console.log("the value after promise return is ",value)
    let future=iterator.next(value);
    console.log("the future is ",future)
    if(future.done) return;
    future.value.then(doAfterReceiving);
}

function* steps(){
    const downloadedData= yield downloadData("www.xyz.com");
    console.log("data downloaded is ",downloadedData);
    const fileWritten= yield writeFile(downloadedData);
    console.log("the file is ",fileWritten);
    const response= yield uploadFile(fileWritten,"www.upload.com");
    console.log("the uploading is done with a response of ",response);
    return "process is completed";
}

const iterator=steps();
const future=iterator.next();
console.log(future.value)
future.value.then(doAfterReceiving)
console.log("the end of global code");
