// Chiediamo all'utente di inserire la propriam mail
var userEmail = prompt('Inserisci la tua email');
// di base l'email non può accedere
var access = false;
// verifichiamo se la mail inserita è presente nella lista confrontando ognuno degli elementi nella lista
var accessList = ['carlo@mail.com', 'luca@mail.com', 'nico@mail.it'];
for (var i = 0; i < accessList.length; i++) {
  // se la mail risulta uguale a una presente nella lista la mail può accedere
  if (userEmail == accessList[i]) {
    access = true;
  }
}
// quando verifica che la mail è stata riconosciuta stamperà un messaggio a seconda dell'esito della verifica
if (access == true) {
  console.log('La mail ' + userEmail + ' è stata riconosciuta. Puoi accedere al sito.');
} else {
  console.log('La mail ' + userEmail + ' non è stata riconosciuta. Accesso negato.');
}
