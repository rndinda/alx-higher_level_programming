#!/usr/bin/node
const request = require('request');
request('https://swapi-api.alx-tools.com/api/films/', function(error, response,body){
    if (error){
        console.error('Error:', error)
    }else{
        const movies = JSON.parse(body).results;
        const wedgeMovie = movies.filter(movie => movie.characters.includes('https://swapi-api.alx-tools.com/api/films/'));
        console.log(`here is the number:${wedgeMovie.length} `);
    }
});