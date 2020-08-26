var nomi = ["Alfio", "Roberto", "Mario"];

var nomeInserito = prompt("Inserisci il tuo nome");

nomeTrovato = false;

for (var i = 0; i < nomi.length; i++) {
  var nomiFinder = nomi[i];

  if (nomiFinder == nomeInserito) {
    nomeTrovato = true;
  }
}

if (nomeTrovato == true) {
  console.log("puoi entrare");
}
else {
  console.log("Non puoi entrare");
}
