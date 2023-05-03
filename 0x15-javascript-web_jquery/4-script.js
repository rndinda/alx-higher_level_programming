$(document).ready(function(){
    $('DIV#toggle_header').click(function(){

        let myHeader = $('header');

        myHeader.toggleClass('red green');
    });
});