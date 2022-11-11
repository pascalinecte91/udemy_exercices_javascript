let readline = require("readline-sync");

const Puissance = 2;
let saisie = parseInt(readline.question("Puissance voulue ? "));

console.log(saisie + " à la puissance "+ saisie + " = " + Math.pow(Puissance, saisie));