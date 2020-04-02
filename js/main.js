console.log('ok');

/*************************************************
 * 
 * PALI & DISPARI - FUNCTION
 * 
 *************************************************/


 /**
  *  Palidroma
     Chiedere all’utente di inserire una parola
     Creare una funzione per capire se la parola inserita è palindroma
  
 */

 // Chiedere parola all'utente
var parUt = prompt('inserisci una parola').toLowerCase();
console.log('La tua parola: ', parUt);

//Invocazione
var parUtReverse = reversePar(parUt);
console.log('La tua parola al contrario: ',parUtReverse);

//Condizione per capire se è palindromo
if (parUt == parUtReverse) {
    console.log('la parola ' + parUt + ' è palindroma');
} else {
    console.log('la parola ' + parUt + ' non è palindroma');   
}


// Definizione
function reversePar(parola) {

    var reverse = '';
    for (i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i];
    }

    return reverse;
}


////////////////////////////////////////////////////////////////////////////////////////

/**
 * Pari e Dispari
    L’utente sceglie pari o dispari e un numero da 1 a 5. 
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
 */

 // Scelta Pari o Dispari Utente 

var sceltaUt = prompt('Scegli pari o dispari, digita "pari" o "dispari"').toLowerCase();
var numUt = parseInt( prompt('Scegli un numero da 1 a 5') );

// Genero numero random AI
var numAI = randomNumAi(1, 5);


console.log('Hai scelto: ' + sceltaUt);
console.log('Il tuo numero: ' + numUt);
console.log('numero AI: ' + numAI);

// Somma dei due numeri
var sommaNum = numUt + numAI
console.log('la somma dei numeri è: ' + sommaNum);

// Stabiliamo se il numero risultante dalla somma è pari o dispari
if (pariDispari(sommaNum) == 'pari') {
    var resParDis = 'pari';
} else {
    var resParDis = 'dispari';
}
console.log(sommaNum + ' è ' + resParDis);

// Stabiliamo chi ha vinto

if (resParDis == sceltaUt) {
    console.log('HAI VINTO!');   
} else {
    console.log('HAI PERSO!');    
}


// Definizioni

function randomNumAi (min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + 1;
    return random;
}

function pariDispari(num) {
    if (num % 2 ==0) {
        return 'pari'
    } 

    return 'dispari'
}