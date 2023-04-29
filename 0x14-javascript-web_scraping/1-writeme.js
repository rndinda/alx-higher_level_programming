#!/usr/bin/node

const fs = require('fs');

fs.writeFile('./my_file.txt', 'Python is cool','utf-8',(error)=>{
  if(error){
    console.log(error);
  }

});