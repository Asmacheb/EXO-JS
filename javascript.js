// let nom = 0
// let prénom = 0
// let age = 2
// let taille = 1.68

// console.log ("prenom, nom, age, taille")
// console.log ("prenom, nom, taille, age:" , age )

//exo2

// nom = "Chebaiki"
// prenom = "Asma"
// age = 24
// taille = 1.68

// let global = `${nom} ${prenom} ${age} ${taille} `

// console.log (global)

//EXO3

// prenom = prompt("Entrer votre prenom");

// console.log = (prenom);

 //EXO4

//  age = prompt ("entrer votre age")
 
//  if (age>=18) {
//     console.log("je suis majeur")
//  }

//  else {
// console.log("je ne suis pas majeur")
//  }


//EXO5

// let Mathéo = 15.4
// let Nathan = 9.2
// let Léo = 16.1
// let Maxime = 12.6

// let moyenne = (Mathéo+Nathan+Léo+Maxime) / 4; 
// console.log (moyenne)

//EXO6

// let joker = Math.floor(Math.random() * 100) + 1;
// console.log(joker)

// EXO7

// let titre = document.createElement("h1");
// let contenu = document.createTextNode("Hello world")
// titre.appendChild(contenu)
// document.body.appendChild(titre);

//  titre.className="monH1"
//  titre.id="presentation"


// let texte = document.createElement("p")
// let presentation = document.createTextNode("je suis un paragraphe")
// texte.appendChild(presentation);
// document.body.appendChild(texte);

// document.body.insertBefore(texte,titre)

//Exo8
let nombre;

nombre = prompt("Entrer un nombre")

let resultat = Math.floor(Math.random() * nombre) + 1;

if (nombre > 0 ) {
 console.log(resultat)
}

