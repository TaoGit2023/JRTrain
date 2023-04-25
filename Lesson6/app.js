// const {increment, getCounter} = require('./ES6.js');

// increment();
// console.log(getCounter());
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'ES6.html'),(err, content)=>{
            if(err) throw err;
            res.end(content);
            
        });
        return;
    }
});
server.listen(3000);