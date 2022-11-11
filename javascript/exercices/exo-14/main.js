const monButton = document.querySelector("button");
const divResult  = document.querySelector("div") ;



//** fonction ANOMYME */
//! */ au clic n'importe ou , coucou apparaitra */
// addEventListener("click", function() {
//     console.log('coucou');
// });


//! si je veux cliquer que sur le button :  */

monButton.addEventListener('click', function() {
// 	console.log('coucou');
// });

let txt = "";
for(let i = 1 ; i <= 10; i++){
    txt += "3 * " + i + " = "+ (3*i) + "<br />";
}
divResult.innerHTML = txt;
});