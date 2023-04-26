#!/usr/bin/node
// script that reads and prints the content of a given file

const file = process.argv[0];
const fs = require('fs');

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});