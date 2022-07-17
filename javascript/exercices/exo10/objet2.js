let readline = require("readline-sync");

// on cree un objet personnage vide
let personnage = {};

personnage.nom = readline.question("quel est votre nom ?");
personnage.age = parseInt(readline.question("quel est votre age ?"));

// on peut refaire un objet vide 
personnage.caract = {}
// ne fonctionne que si on cree un objet VIDE
personnage.caract.force = 7;
personnage.caract.intelligence = 5;
personnage.caract.humeur = 8;

console.log(personnage);