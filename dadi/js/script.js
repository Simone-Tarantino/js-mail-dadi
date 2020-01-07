alert('Benvenuto nel gioco dei dadi, premi "OK" per iniziare a giocare.');
// estraiamo un numero random da 1 a 6
var userDice = Math.floor((Math.random() * 6) + 1);
alert('Ti è uscito il numero ' + userDice);
// estraiamo un numero random da 1 a 6
var cpuDice = Math.floor((Math.random() * 6) + 1);
alert('Al computer è uscito il numero ' + cpuDice);
// le condizioni per i risultati finali
if (userDice < cpuDice) {
  alert('Hai perso! Ritenta ancora.');
} else if (userDice == cpuDice) {
  alert('Parità. Fai un altro tiro dei dadi.');
} else {
  alert('Complimenti hai vinto! Se ti va gioca ancora.');
}
