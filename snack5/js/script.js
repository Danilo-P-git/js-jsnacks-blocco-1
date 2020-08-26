// var primoNumero = prompt("inserisci un numero");
// var secondoNumero = prompt("inserisci un numero");
// var terzoNumero = prompt("inserisci un numero");
// var quartoNumero = prompt("inserisci un numero");
// var quintoNumero = prompt("inserisci un numero");
//
// var totale = +primoNumero + +secondoNumero + +terzoNumero + +quartoNumero + +quintoNumero;
// if (isNaN(totale)) {
//   console.log("Devi inserire solo numeri");
// }
// else {
//   console.log(totale);
//
// }
//

var totale = 0;

for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt("inserisci un numero"))
  totale= totale + numero;
}

if (isNaN(totale)) {
  console.log("Devi inserire solo numeri");
}
else {
  console.log(totale);

}
