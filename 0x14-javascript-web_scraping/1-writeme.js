#!/usr/bin/node
const fs = require('fs');

fs.writeFile('./my_file.txt','Python is cool', 'utf8',(err) =>{
    if(err){
        console.error(err);
    }
});