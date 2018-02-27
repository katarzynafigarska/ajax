'use strict';




// definicja funkcji ajax
function ajax( method, url ) {
    
    
    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                console.log(returnData); 
				httpReq.onsuccess(returnData);
            
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }
            
        }
    
    }
	
	httpReq.onsuccess = function(response) {
		var jsonObj = JSON.parse(response);
		console.log(jsonObj);
		//console.log(jsonObj.userId + ' ' + jsonObj.userName + ' ' + jsonObj.userURL);
        
        var par1 = document.createElement('p');
        var par2 = document.createElement('p');
        var par3 = document.createElement('p');
        
        document.body.appendChild(par1);
        document.body.appendChild(par2);
        document.body.appendChild(par3);
        
        par1.innerHTML = 'UserId: ' + jsonObj.userId;
        par2.innerHTML = 'UserName: ' + jsonObj.userName;
        par3.innerHTML = 'UserURL: ' + jsonObj.userURL + '<p>-------------</p>';
	}


    // wysłanie danych do serwera
    httpReq.send();
}



// wywołujemy naszą funkcję ajax() :)    

function pobierzDane() {
    ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );
}

document.getElementById('pobierz').addEventListener('click', pobierzDane);









