#!/usr/bin/node
const request = require('request');

request('https://alx-intranet.hbtn.io/status',function(err,response){
  if(err){
    console.error(err)
  }else {
    console.log('code: ', response.statusCode)
  };

});