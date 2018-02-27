'use strict';
$('#pobierz-dane').click(function () {
    
    
$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data) {
    
    $('body').append('<p>User ID: '+data.userId+'</p>');
    $('body').append('<p>User Name: '+data.userName+'</p>');
    $('body').append('<p>User URL: '+data.userURL+'</p>');
});


})











