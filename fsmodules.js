const fs = require('fs')

// fs.readFile('fisrst.txt','utf8',(err,data)=>{
//     console.log('error in these function:- '+ err,'data of file:- '+data);
// });

const a = fs.readFileSync('first.txt')
console.log(a.toString());
console.log('finished reading file');

// fs.writeFile('file2.txt',"here a content to add in file(Also Make that file)",()=>{
//     console.log('write to the file');
// })