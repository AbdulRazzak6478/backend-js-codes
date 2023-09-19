// Tasks:(don't use Promises only use callbacks)
// 1. write a function to download the data from a URL.
// 2. write a function to save the that downloaded data in a file and return the filename.
// 3. write a function to upload the file written in previous step to a newURL.

function downloadData(url, cb) {
  console.log("1started downloading from the given URL ,", url);
  setTimeout(function download() {
    console.log("2downloading is completed from the url ", url);
    const content = "ABCDEF";
    cb(content);
  }, 5000);
}

function writeFile(content, cb) {
  console.log("4started writing the file with the content ", content);
  setTimeout(function write() {
    console.log("5writing file is completed ");
    const file = "file.text";
    cb(file);
  }, 2000);
}

function uploadFile(file, newURL, cb) {
  console.log("7started uploading the file in the newURL which is ", newURL);
  setTimeout(function upload() {
    console.log("8uploading the file is completed in the ", newURL);
    const response = "SUCCESS";
    cb(response);
  }, 4000);
}
// downloadData("www.xyz.com",function download(content){
//     console.log("after downloading the content is ",content);
// })
// writeFile("abcdefg",function download(file){
//     console.log("the content is written in the file : ",file);
// })
// uploadFile("file.text","www.upload.com",function download(response){
//     console.log("the file is uploaded with the response of  : ",response);
// })

downloadData("www.xyz.com", function download(content) {
  console.log("3after downloading the content is ", content);
  writeFile("abcdefg", function download(file) {
    console.log("6the content is written in the file : ", file);
    uploadFile("file.text", "www.upload.com", function download(response) {
      console.log("9the file is uploaded with the response of  : ", response);
    });
  });
});

// output:-
// started downloading from the given URL , www.xyz.com
// downloading is completed from the url  www.xyz.com
// after downloading the content is  ABCDEF
// started writing the file with the content  abcdefg
// writing file is completed 
// the content is written in the file :  file.text
// started uploading the file in the newURL which is  www.upload.com
// uploading the file is completed in the  www.upload.com
// the file is uploaded with the response of  :  SUCCESS