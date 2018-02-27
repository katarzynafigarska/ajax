'use strict';


$('#przycisk').click(function(){
 
$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
    
    

    $('body').append('<p>Imię: '+data.imie+'</p>');
    $('body').append('<p>Nazwisko: '+data.nazwisko+'</p>');
    $('body').append('<p>Zawód: '+data.zawod+'</p>');
    $('body').append('<p>Firma: '+data.firma+'</p>');
   
    
});

});
