// var numeroCasuale = parseInt(Math.floor(Math.random() * 1000) +1);
//
// var numeroInserito = parseInt(prompt("inserisci un numero"));
//
// if (isNaN(numeroInserito)) {
//   console.log("Non hai inserito un numero");
// }
//
// else {
//   console.log(numeroCasuale + numeroInserito);
// }

var numeroCasuale = parseInt(Math.floor(Math.random()* 100) + 1);

if (numeroCasuale % 2 == 0) {
  document.getElementById('pari').innerHTML = numeroCasuale;
}
else {
  document.getElementById('dispari').innerHTML = numeroCasuale;
}
