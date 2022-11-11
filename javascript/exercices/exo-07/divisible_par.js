let c1 = 123;
let c2 = 20;

afficherResultatdivisionPar3(c1);
afficherResultatdivisionPar3(c2);

function afficherResultatdivisionPar3(chiffre){
  // chiffre en argument n'a pas forcement le meme nom
  if(chiffre % 3 === 0){
  //si le chiffre 3 est divisible par 0
    console.log("le resultat de " + chiffre + " est / 3 = " + (chiffre/3));
  }else {
    console.log("le chiffre " + chiffre + " n'est pas /3");
  }
}