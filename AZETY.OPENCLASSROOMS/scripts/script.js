
/*
     // recuperation de certain elemeent de la page html
// let  AZer = document.getElementById("AZertitle")
//console.log(AZertitle)
let AZer = document.querySelectorAll("#AZer-container input ")
console.log(AZer)

for(let i = 0; i< AZer.length; i++){
console.log(AZer[i])
}
      //  modification des elements de ma page web

let baliseImage = document.getElementById("1")
baliseImage.setAttribute("alt", "helllo hwo areyou")
baliseImage.classList.add("tree")
baliseImage.classList.remove("two")



let x = document.getElementById("one")
console.log(x)
let y = document.getElementById("two")
console.log(y)
let z = document.querySelector(".AZer-container-one input ")
console.log(z)
let t = document.querySelector("#AZer-container span")
console.log(t)
let u = document.querySelectorAll(".AZer-zero input")
console.log(u)

//creer des elements HTML
let titrepage = "le titre de la page bonjour" 
// let v = document.createElement("h1")
// v.innerText = titrepage      // pour donner du contenu a la balise 
let footer = document.querySelector("footer")
// main.appendChild(v)

let html = `
      <div> 
            <br> <span> ${titrepage}   </span>
      </div>
      `
footer.innerHTML = html;       

*/


// fonction affcihe resultat


function afficherResultat(score,  nbmotsproposes) {

       let spanscore = document.querySelector(".end  span")

       let affichagescore = `${score} / ${nbmotsproposes}`
       spanscore.innerText = affichagescore
       console.log("Votre Score total est de:" + score + " / " + nbmotsproposes);
   
   }
   
   function choisirphrasesoumot() {
       let choix = prompt("vous desirez jouer avec :  mots ou phrases ")
       while (choix !== "mots" && choix !== "phrases") {
           choix = prompt("vous desirez jouer avec :  mots ou phrases ")
       }
       return choix
   }
   function lancerBoucleJeu(listepropositions) {
       let score = 0
           for (let i = 0; i < listepropositions.length; i++) {
               let Motutilisateur = prompt("entrer le mot : " + listepropositions[i])
               if (Motutilisateur === listepropositions[i]) {
                   score++
               }
           }
       return score
   }
   
   function lancerjeu() {
       let choix = choisirphrasesoumot()
       let score = 0
       let nbmotsproposes = 0
       if (choix === "Mots") {
           score = lancerBoucleJeu(listeMots)
           nbmotsproposes = listeMots.length
       }
       else {
           score = lancerBoucleJeu(listePhrases)
           nbmotsproposes = listePhrases.length
       }
       afficherResultat(score, nbmotsproposes)
   }
   
   
   


