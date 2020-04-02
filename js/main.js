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

