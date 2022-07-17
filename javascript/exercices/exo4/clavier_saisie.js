var readline = require("readline-sync");

let nom = readline.question("Quel est votre nom ? ");
let prenom = readline.question("Quel est votre prénom ? ");
let age = parseInt(readline.question("Quel est votre age ? "));

console.log(typeof(age));


let txt = "----------------------------------\n";
txt += "-------BIENVENUE------------------\n";
txt += "-----------------------------------\n";

txt += "Votre nom est : " + nom +"\n";
txt += "Votre prénom est : " + prenom +"\n";
txt += "Votre age est : " + age;

console.log(txt);

// console.log("quel est votre nom : " + nom);
// console.log("quel est votre prenom : " + prenom);
// console.log("quel est votre age : " + age);
