
let nbreClic = 0;
const monDiv = document.querySelector("div");

function incrementer() {
nbreClic++;
monDiv.innerHTML = "vous avez cliqué" + nbreClic + " fois";
}