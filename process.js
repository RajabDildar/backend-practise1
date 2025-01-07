console.log(process.argv);
//write in terminal:  node process.js hello bye
//in above line,hello bye are arguments

let args = process.argv;
for (let i = 2; i < args.length; i++) {
  console.log(`hello ${args[i]}!`);
}
//write rajab ali as arguments (node process.js rajab ali)
