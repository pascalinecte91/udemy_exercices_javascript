let readline = require('readline-sync');

let chiffreSaisi = parseInt(readline.question('quelle table de X  souhaitez vous afficher ?'));

for (let i = 1; i <= 10; i++) {
  let result = chiffreSaisi * i;
  console.log(chiffreSaisi + " * " + i + " = " + result);
}

console.log(chiffreSaisi);
