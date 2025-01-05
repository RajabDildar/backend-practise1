const fs = require("node:fs");

/* //to write text in a file
fs.writeFile("hey.txt", "hi everyone!welcome to the file", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
}); */

/* //to append text in the file
fs.appendFile("hello.txt", "\n ...hey this is appended line", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
}); */

/* //to rename a file
fs.rename("hey.txt", "hello.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
}); */

/* //to make copy of an existing file
fs.copyFile("hello.txt", "./copyFiles/copy1.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
}); */

/* // to delete a file
fs.unlink("tbd.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
}); */

/* // to delete an empty folder
fs.rmdir("./copyFiles", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("done");
  }
}); */

/* // to delete a folder with files inside it
fs.rm("./tbdf", { recursive: true }, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("done");
  }
}); */

/* //for creating new folder
fs.mkdir("newF1", (err) => {
  if (err) {
    console.error(err.message);
  }
}); */

/* //for reading file
fs.readFile("hello.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
}); */

/* //for reading file
let readed = fs.readFileSync("hello.txt", "utf-8"); // if we perform operation in sync,we can store it in variables.(if async,we have to give callback)
console.log(readed); */

// console.log(fs.statSync("./hello.txt")); //statistics of a file
