var fs = require('fs');

// read a file
var readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);

//write a file 
//it will write the content of the readMe
fs.writeFileSync('writeMe.txt', readMe)
