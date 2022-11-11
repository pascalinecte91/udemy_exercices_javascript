function afficherTaille(mot){
if(mot.length < 8){
  //console.log("le mot contient " + mot.length + " caracteres");  OU 
  //console.log("le mot contient %d  caracteres", mot.length);  OU 
    console.log(`le mot contient ${mot.length} caracteres`);
} else {
  console.log(" le mot fait plus de 8 caracteres");
}
}

let mot1 = "eleve";
let mot2 = "javascript";

afficherTaille(mot1);
afficherTaille(mot2);