#!/usr/bin/node

const fs = require('fs');

fs.writeFile('./text_file/filetwo.txt', 'Oyaa,andika hii','utf-8',(error)=>{
  if(error){
    console.log(error);
  }

});