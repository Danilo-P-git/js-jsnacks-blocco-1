// Inserisco le variabili
var primoNumero = parseInt(prompt("inserisci il primo numero"));
var secondoNumero = parseInt(prompt("inserisci il secondo numero"));
// Faccio in modo che se non sono numeri automaticamente dia errore
if (isNaN(primoNumero) && isNaN(secondoNumero) ) {
  document.getElementById('error').innerHTML = "Errore inserisci due numeri"

}
// Risultato se il primo numero è maggiore del secondo
else if (primoNumero > secondoNumero) {
  document.getElementById('risultato').innerHTML = "il numero " + primoNumero + " è maggiore di " + secondoNumero;
}
// Risultato se il secondo numero è maggiore del primo

else if (secondoNumero > primoNumero) {
  document.getElementById('risultato').innerHTML = "il numero " + secondoNumero + " è maggiore di " + primoNumero;
}
// Risultato se sono uguali
else {
  document.getElementById('risultato').innerHTML = "hai inserito due numeri uguali"
}
// Stampo le due variabili per l'html
document.getElementById('primonumero').innerHTML = primoNumero;
document.getElementById('secondonumero').innerHTML = secondoNumero;
