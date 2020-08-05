var primaParola = prompt("inserisci la prima parola");
var secondaParola = prompt("inserisci la seconda parola");


if (secondaParola.lenght > primaParola.lenght) {
  document.getElementById('risultato').innerHTML = "la parola " + secondaParola + " è più lunga di " + primaParola ;
}
else if (!isNaN(secondaParola) && !isNaN(primaParola)) {
  document.getElementById('risultato').innerHTML = "hai inserito due numeri";

}
else if (secondaParola.lenght == primaParola.lenght) {
 document.getElementById('risultato').innerHTML = "Le parole inserite sono uguali";
}
else {
  document.getElementById('risultato').innerHTML = "la parola " + primaParola + " è più lunga di " + secondaParola  ;
}
