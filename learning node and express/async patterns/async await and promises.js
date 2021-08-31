const { readFile, writeFile } = require("fs").promises;
const { promises } = require("stream");
const util = require("util");

// method 1
// promise
//
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     // reading a file
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./eg.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// method 2
// async await
//
// const fun = async () => {
//   try {
//     const res = await getText("./eg.txt");
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fun();

// method 3 and 4
// promise creation using util inbuilt module
//
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    // const one = await readFilePromise("./eg.txt", "utf8");
    const one = await readFile("./eg.txt", "utf8");
    console.log("one\n", one);
    // const two = await readFilePromise("./eg.txt", "utf8");
    const two = await readFile("./eg.txt", "utf8");
    console.log("two\n", two);
    await writeFile(
      "./eg2.txt",
      "written using the util promisify and await and async()"
    );
  } catch (error) {
    console.log(error);
  }
};
start();
