#!/usr/bin/node
// reads and prints 

const fs = require('fs')

fs.readFile('\cisfun', 'utf-8', (err ,data)=> {
    if (err){
        console.error(err);
        return;
    }


    console.log(data)
})