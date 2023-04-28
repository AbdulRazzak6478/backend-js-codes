// Tasks:(don't use Promises only use callbacks)
// 1. write a function to download the data from a URL.
// 2. write a function to save the that downloaded data in a file and return the filename.
// 3. write a function to upload the file written in previous step to a newURL.

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
  

//   console.log(downloadData("www.xyz.com"));
//   console.log(writeFile("abcdefg"));
//   console.log(uploadFile("file.text","www.upload.com"));
  
let step1=downloadData("www.xyz.com");
let step2=step1.then(function fulfilled(content){
    console.log("downloading is done with the content :",content);
    return writeFile(content);
})
let step3=step2.then(function fulfilled2(file){
    console.log("writing is done in file :",file);
    return uploadFile(file,"www.upload.com");
});
let step4=step3.then(function fulfilled3(response){
    console.log("uploading is done with the response :",response);
    return "Process is done and task is completed with promises";
})
step4.then(function fulfilled4(message){
    console.log(message);
})



  // output:-
// started downloading from the given URL , www.xyz.com
// downloading is completed from the url  www.xyz.com
// downloading is done with the content : ABCDEF    
// started writing the file with the content  ABCDEF
// writing file is completed 
// writing is done in file : file.text
// started uploading the file in the newURL which is  www.upload.com
// uploading the  file.text  is completed in the  www.upload.com
// uploading is done with the response : SUCCESS      
// Process is done and task is completed with promises