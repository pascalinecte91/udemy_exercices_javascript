let readline = require("readline-sync");

let saisie = parseInt(readline.question("Quel nombre voulez vous saisir ?"));
let fin = false;


while(!fin){
if(isNaN(saisie)){
  console.log("veuillez recommencer la saisie ce n'est pas correct");
  saisie = parseInt(readline.question("quel nombre voulez vous saisir ?"));
} else {
  console.log("c'est un chiffre");
  fin = true;
}
}

console.log("le chiffre est bien saisie : " + saisie );