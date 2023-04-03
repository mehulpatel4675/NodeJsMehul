const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/home', (req, res) => {
const a = fs.readFileSync('index.html');
res.send(a.toString());
});
app.get('/fsmodule', (req, res) => {
const a = fs.readFileSync('fsmodules.js');
res.send(a.toString());
}); 
app.get('/', (req, res) => {
const a = fs.readFileSync('index.html');
res.send(a.toString());
});
app.get('/file2', (req, res) => {
const a = fs.readFileSync('file2.txt');
res.send(a.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})