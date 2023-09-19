// Tasks:(don't use Promises only use callbacks)
// 1. write a function to download the data from a URL.
// 2. write a function to save the that downloaded data in a file and return the filename.
// 3. write a function to upload the file written in previous step to a newURL.

function downloadData(url) {
  return new Promise(function down(res, rej) {
    console.log("started downloading from the given URL ,", url);
    setTimeout(function download() {
      console.log("downloading is completed from the url ", url);
      const content = "ABCDEF";
      rej(content);
    }, 5000);
  });
}

function writeFile(content) {
  return new Promise(function writing(res, rej) {
    console.log("started writing the file with the content ", content);
    setTimeout(function write() {
      console.log("writing file is completed ");
      const file = "file.text";
      res(file);
    }, 3000);
  });
}

function uploadFile(file, newURL) {
  return new Promise(function uploading(res, rej) {
    console.log("started uploading the file in the newURL which is ", newURL);
    setTimeout(function upload() {
      console.log("uploading the ", file, " is completed in the ", newURL);
      const response = "SUCCESS";
      res(response);
    }, 4000);
  });
}

//   console.log(downloadData("www.xyz.com"));
//   console.log(writeFile("abcdefg"));
//   console.log(uploadFile("file.text","www.upload.com"));
// downloadData("www.xyz.com")
//   .then(
//     function fulfilled(content) {
//       console.log("downloading is done with the content :", content);
//       return writeFile(content);
//     },
//     function rejection1(value) {
//       console.log("the rejection 1 is ", value);
//       throw "the rejection from downloading"
//     }
//   )
//   .then(
//     function fulfilled2(file) {
//       console.log("writing is done in file :", file);
//       return uploadFile(file, "www.upload.com");
//     },
//     function rejection2(value) {
//       console.log("the rejection 2 is ", value);
//     }
//   )
//   .then(
//     function fulfilled3(response) {
//       console.log("uploading is done with the response :", response);
//       return "Process is done and task is completed with promises";
//     },
//     function rejection3(value) {
//       console.log("the rejection 3  is ", value);
//     }
//   )
//   .then(
//     function fulfilled4(message) {
//       console.log(message);
//     },
//     function rejection4(value) {
//       console.log("the rejection 4 is ", value);
//     }
//   )
downloadData("www.xyz.com")
  .then(
    function fulfilled(content) {
      console.log("downloading is done with the content :", content);
      return writeFile(content);
    },
   
  )
  .then(
    function fulfilled2(file) {
      console.log("writing is done in file :", file);
      return uploadFile(file, "www.upload.com");
    },
   
  )
  .then(
    function fulfilled3(response) {
      console.log("uploading is done with the response :", response);
      return "Process is done and task is completed with promises";
    },
    
  )
  .then(
    function fulfilled4(message) {
      console.log(message);
    },
   
  )
  .catch(function err1(error) {
    console.log("the process error is  ", error);
  });
