var primoNumero = parseInt(prompt("inserisci un numero"))

if (primoNumero % 2 == 0 ) {
  document.getElementById('risultato').innerHTML = "il numero che hai inserito è pari ed è" + primoNumero;
}
else {
  document.getElementById('risultato').innerHTML = "Il numero che hai inserito è dispari il successivo è " +  (primoNumero + 1);
}
