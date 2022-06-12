// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fn) => {
  var promises = [file1, file2, file3].map(function (f) {
    return new Promise(
      function (_path, resolve, reject) {
        fs.readFile(_path, "utf8", function (err, data) {
          if (err) {
            reject(err);
          } else {
            // parsing data dirty way, sorry JSON.parse 😂
            resolve(
              data
                .match(/message": ?"(.*)"/)[1]
                .replace(/halo/gi, "")
                .trim()
            );
          }
        });
      }.bind(this, f)
    );
  });
  return Promise.all(promises)
    .then((r) => {
      fn(null, r);
    })
    .catch((er) => fn(er, null));
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
