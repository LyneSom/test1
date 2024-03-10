/*  ici le devoir est structures en plusieurs parties , celle avec l'utilisation de la condition if 
l'autre la boucle for et while et l'autre avec un melange de 2 tableaux pour rentrer le jeu plus complexe 
pour essayer les differents vous meme vous devriez simplement enlever l'indicateur de commentaire (/*) sur la partie que 
vous desirez voir  */




/* 
declarer un tableau contenant une liste de mots


const  listeMots = ["Cachalot", "petinia", "Serviette"]
let score = 0

//declaration d'une variable contenant le mot saisir par  l'utilisateur
//le prompt permet d'afficher le popup demander a l'tilisateur de saisir un mot 
let Motutilisateur = prompt("Entrez le mot : " +  listeMots [0])

//verifier que le mot saisir par le user est celui demander : en s'assurant qu'il correspondent au premier mot 
//du tableau
if(Motutilisateur === listeMots[0]){
  score++
  console.log(score)
  
}

//verifier que le mot saisir par le user est celui demander : en s'assurant qu'il correspondent au deuxieme mot 
//du tableau
Motutilisateur = prompt("Entrez le mot : " + listeMots [1])
if(Motutilisateur === listeMots[1]){
  score++
  console.log(score)
  
}

//verifier que le mot saisir par le user est celui demander : en s'assurant qu'il correspondent au troisieme mot 
//du tableau
Motutilisateur = prompt("Entrez le mot : " + listeMots [2])
if(Motutilisateur === listeMots[2]){
  score++
  console.log(score)
  
}
//afficher le score total
console.log("Votre Score total est de:" + score + " / 3");

*/






/*ici nous avons le meme exercice mais avec l'utilisation de 2 boucles differentes for et while


const listeMots = ["Cachalot", "petinia", "Serviette"]
let score = 0
for (i = 0; i < 3; i++) {
    let Motutilisateur = prompt("entrer le mot : " + listeMots[i])
    if (Motutilisateur === listeMots[i]) {
        score++
    }
}
console.log("Votre Score total est de:" + score + " / 3");


i = 0
while (i < 3) {
    let Motutilisateur = prompt("entrer le mot : " + listeMots[i])
    if (Motutilisateur === listeMots[i]) {
        score++
    }
}
console.log("Votre Score total est de:" + score + " / 3");

*/


/*


// la nous avons un melange de 2 tableaux pour le jeu un peu plus complexe

const listeMots = ["Cachalot", "petinia", "Serviette"]
const listePhrases = ["pas de panique", "la vie l'univers et le reste", "merci pour le poisson"]
let score = 0

// declaration de la var qui va contenir le choix
let choix = prompt("Avec quel liste souhaitez vous jouez? : la liste de mots ou de phrases ?")

// tant que le choix n'est pas saisir redemander
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quel liste souhaitez vous jouez? : la liste de mots ou de phrases ?")
}
//lancement de la boucle avec la choix du user
if (choix === "mots") {
    for (i = 0; i < 3; i++) {
        let Motutilisateur = prompt("entrer le mot : " + listeMots[i])
        if (Motutilisateur === listeMots[i]) {
            score++

        }
    }
    console.log("Votre Score total est de:" + score + " / 3");
}
else {
    for (i = 0; i < 3; i++) {
        let Motutilisateur = prompt("entrer la phrase : " + listePhrases[i])
        if (Motutilisateur = listePhrases[i]) {
            score++
        }
    }
    console.log("Votre Score total est de:" + score + " / 3");
}
 */





let choix = 0
let score =0
function afficherResultat(score,  nbmotsproposes) {
    // let spanscore = document.querySelector(".end")
    // let affichagescore =  `${score} / ${nbmotsproposes}`
    // spanscore.innerText = affichagescore
    console.log("Votre Score total est de:" + score + " / " + nbmotsproposes);

}

function choisirphrasesoumot() {
    let choix = prompt("vous desirez jouer avec la liste de  :  mots ou phrases ")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("vous desirez jouer avec :  mots ou phrases ")
    }
    return choix
}
function lancerBoucleJeu(listepropositions) {

        for (let i = 0; i < listepropositions.length; i++) {
            let Motutilisateur = prompt("entrer le mot : " + listepropositions[i])
            if (Motutilisateur === listepropositions[i]) {
                score++
            }
        }

    // if (choix === "mots") {
    //     for (i = 0; i <3 ; i++) {
    //         let Motutilisateur = prompt("entrer le mot : " + listeMots[i])
    //         if (Motutilisateur === listeMots[i]) {
    //             score++
    
    //         }
    //     }
    //     console.log("Votre Score total est de:" + score + " / 3");
    // }
    // else {
    //     for (i = 0; i <3; i++) {
    //         let Motutilisateur = prompt("entrer la phrase : " + listePhrases[i])
    //         if (Motutilisateur = listePhrases[i]) {
    //             score++
    //         }
    //     }
    //     console.log("Votre Score total est de:" + score + " / 3");
    // }
    // return score
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

lancerjeu();


