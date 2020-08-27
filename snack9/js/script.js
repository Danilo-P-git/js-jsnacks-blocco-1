var numeroInserito = prompt("inserisci un numero di 4 cifre")
var totale = 0
for (var i = 0; i < numeroInserito.length; i++) {
  totale += parseInt(numeroInserito[i])

}
console.log(totale);
