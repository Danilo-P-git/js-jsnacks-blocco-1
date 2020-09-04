
function sommaNumeriArray(array) {
var somma = 0 ;
for (var i = 0; i < array.length; i++) {
  somma += array[i];
}
return somma;
}

var array = [];
do {
  var numeroInserito = parseInt(prompt("inserisci un numero"));
  listaNumeri.push(numeroInserito);
  console.log(listaNumeri);
} while (sommaNumeriArray(listaNumeri) < 50);
