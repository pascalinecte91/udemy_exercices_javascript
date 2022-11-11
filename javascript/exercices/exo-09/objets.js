
//Creer un objet: 

let voiture = {
  immatriculation : "AVCCFFFC",
  marque: "toyota",
  annee : "2012",
  //  on peut faire un objet d'objet en ajoutant par exemple : 
  caracteristique : {
    kilometre : 120000,
    color : "red",
    chevaux : 7,
    porte : 3
  }
}

console.log(voiture); // on recupere tout l objet
// on recupere la valeur de la propriete  immatriculation
console.log(voiture.immatriculation);

console.log(`la voiture avec l'immatriculation ${voiture.immatriculation}, de marque ${voiture.marque},
date de : ${voiture.annee}, 
nombre de kilometre : ${voiture.caracteristique.kilometre},
color : ${voiture.caracteristique.color}`);