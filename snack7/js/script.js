var arrayVuoto = [];


for (var i = 0; i < 7; i++) {
  var numeroInserito = parseInt(prompt("Inserisci un numero"));
  if (isNaN(numeroInserito)) {
    console.log("Devi inserire solo numeri");
  }

  if (numeroInserito % 2 != 0  ) {
    arrayVuoto.push(numeroInserito);
  }

}

console.log(arrayVuoto);
