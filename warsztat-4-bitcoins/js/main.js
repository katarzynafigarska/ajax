function porownanie () {
    

var buyArrow = $('#buy-arrow');
var currentBuyPrice = parseFloat($('#buy').html()); //zwroci zmienno przecinkowa liczbe parseFloat


var sellArrow = $('#sell-arrow');
var currentSellPrice = parseFloat($('#sell').html());


$.getJSON('https://blockchain.info/pl/ticker', function(data) {
    
    $('#buy').html(data.PLN.buy);
    $('#sell').html(data.PLN.sell);
    
    if(currentBuyPrice > parseFloat(data.PLN.buy)) {
        buyArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
        buyArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        buyArrow.removeAttr('class').addClass('fa fa-minus-square-o');
    }
    
    
    if(currentSellPrice > parseFloat(data.PLN.sell)) {
        sellArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentSellPrice < parseFloat(data.PLN.sell)) {
        sellArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        sellArrow.removeAttr('class').addClass('fa fa-minus-square-o');
    }
});
    console.log('odsawiezono');
};

porownanie();

//setInterval pozwala nawykonanie funcji po okreslonym przez nas czasie
//setInterval(nazwaFunkcji, ile_czasu);

setInterval(porownanie, 5000);