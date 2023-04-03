// const test = require("./second"); // take that object fetch as test
// console.log('Keep Moving Forward');
// console.log(test);

// const http = require('http');
// const data = require('./dataapi')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     console.log('server running....');
//     res.end();
// }).listen(5000);

// console.log(process.argv[2]);
//  tut12
// const fs = require('fs');
// const input = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input [4]);
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invalid ");
// }

//tut13
// const fs = require('fs');
// fs.writeFileSync('a.txt','this is a simple file with a.html');  // create the file 
// fs.unlinkSync('a.txt','this is a simple file with a.html');  // delete the file
// const path = require('path');
// const dirpath = path.join(__dirname,'files');
// console.warn(dirpath);
// create the file with loop
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(dirpath+"/hello "+i+".txt","A Simple Text File create with loop creathe 5 file with these text");   
//   // fs.unlinkSync(dirpath+"/hello "+i+".txt","A Simple Text File create with loop creathe 5 file with these text");   
// }
// fs.readdir(dirpath,(err,files)=>{
//     // console.warn(files);
//     files.forEach((item) => {
//         console.log('File name is:- '+ item);
//     });
// });

// tut 14
// const { promises } = require('dns');
// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a apple file');
// fs,fs.readFile(filePath,'utf8',(err,item)=>{
//   console.log(item);
// });
// Edited the File Content 
// fs.appendFile(filePath,' append file is added in the orignal File...!!!',(err)=>{
//   if(!err) console.log(' File is Upadated');
// });
//Rename the file Name
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//   if(!err) console.log(' File Name  is Upadated');
// });
// fs.unlinkSync(`${dirPath}/fruit.txt`)  // delete that file


//tut 15 & 16
//async issue
// let a =20;
// let b=0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(30)
//     }, 2000);
// });

// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b);
// }); 


// tut 17 &18 & 19 
//  const express = require('express');
//  const app = express();

//  app.get('',(req,res)=>{
//     console.log("get request from user in url:- ",req.query.name);
//     res.send('hello welcome on home page:- ' + req.query.name);
//  });
 
//  app.get('/help',(req,res)=>{
//     res.send('hello  help is here');
//  });

//  app.listen(5000); /// to call server on which port

// tu 20 
//  const express = require('express');
//  const app = express();
 
//  app.get('',(req,res)=>{
//   res.send(`<h1>Welcome to home page</h1> <a href="/help">Go to Help page</a>`)
//  });

//  app.get('/help',(req,res)=>{
//     res.send(`<input type"text" placeholder="User Name" value="${req.query.name}"> <button>Click me</button> <a href="/">Go to Home page</a>`);
//  });
//  app.get('/about',(req,res)=>{   
//     res.send([{
        
//         nameofuser:'Mehul',
//         filedofinterst:'devlopement' 
//     },
//     {
        
//         nameofuser:'parth',
//         filedofinterst:'backend-devlopement '
//     }
//     ]);
    
//  });

//  app.listen(5000); /// to call server on which port

 //tut 21
// const express = require('express');
// const app = express();
// const path = require('path')

// const publicPath = path.join(__dirname,'public');
// console.log(__dirname);


// app.use(express.static(publicPath));

// app.listen(5500);

// tut 22
// const express = require('express');
// const app = express();
// const path = require('path')

// const publicPath = path.join(__dirname,'public');
// console.log(__dirname);

// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// });
// app.get('/help',(_,res)=>{
//     res.sendFile(`${publicPath}/help.html`);
// });
// app.get('*',(_,res)=>{
//     res.sendFile(`${publicPath}/404.html`);
// });
// app.listen(5500);

// ** tut 23 Ejs Template Engine 

// const express = require('express');
// const app = express();
// const path = require('path');
// app.set('view engine','ejs');

// const publicPath = path.join(__dirname,'public');
// console.log(__dirname);


// app.get('/profile',(_,res)=>{
//     const user={
//         name:'mehul patel tut22',
//         email:'m@s.com',
//         city:'valsad'
//     }
//     res.render('profile',{user});
// });
// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// });
// app.get('/help',(_,res)=>{
//     res.sendFile(`${publicPath}/help.html`);
// });
// app.get('*',(_,res)=>{
//     res.sendFile(`${publicPath}/404.html`);
// });
// app.listen(5500);

//tut 24 Dynamic Page With Ejs
const express = require('express');
const app = express();
app.get('*',(req,res)=>{
    res.send('inside the res');
});

app.listen(5500);