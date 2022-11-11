// const divResultat = document.querySelector("div");
// const monButton = document.querySelector("button");

// monButton.addEventListener("click", function(){
//     divResultat.innerHTML = pileOuFace();
// });


//! methode en jquery
$("button").on("click", function (){
    $("div").html(pileOuFace());
});

/*************** */

//! .random  = function qui donne chiffre aleatoire
function pileOuFace(){
    var random = Math.floor(Math.random() * 2);
    // if (random >=1) return "face";
    //else return "pile";

    // ou une ternaire
    // si c'est bon  c'est apres l ?
    // si c'est pas bon c'est apres les : 

    return (random >= 1) ? "face" : "pile";
}