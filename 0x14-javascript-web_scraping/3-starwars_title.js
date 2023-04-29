

const request = require('request')

request.get('https://swapi-api.alx-tools.com/api/films/:id',function(error,response,body){
    if (error){
        console.error('Error:' ,error)
    }else{
        const movie = JSON.parse(body)
        console.log(movie.title)
    }
})