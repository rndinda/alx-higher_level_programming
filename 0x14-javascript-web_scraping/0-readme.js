#!/usr/bin/node
// script that reads and prints the content of a given file

const fs = require('fs');

fs.readFile('./text_file/fileone.txt','utf-8',(error,data)=>{
  if(error){
    console.error(error);
  }
  console.log(data)
})