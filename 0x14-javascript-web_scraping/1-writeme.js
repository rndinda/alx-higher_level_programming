#!/usr/bin/node

const fs = require('fs');

fs.writeFile('./text_file/my_file.txt', 'Python is cool','utf-8',(error)=>{
  if(error){
    console.log(error);
  }

});