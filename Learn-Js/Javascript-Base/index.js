// alert("Salut JS");

// Kamel Case

let maSuperVariable = "Hello";

// Une variable est un espace de stockage

// *** Les variables ***

// Var = vieux Javascript
var unTexte = "Voici un texte";

// const = constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis une chaine de caractère";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voilà c'était le contenu";

// Concaténation avec guillemets altGr + 7
let autreConcatenation = `Chaine précédente : ${chaine}. Voilà c'était le contenu`;

// *** Types de données ***
let string = "Je suis une chaîne de caractère";
let number = 24;

// Seulement les deux réponses
let boolean = false / true;

// Tableau : il y a des crochets
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

// Création d'une boite pour mettre des éléments plus tard
let arbre;

// *** Opérateurs ***

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// puissances
// console.log(4 ** 5);

// *** Opérateurs d'affectations ***

let total = 0;

total = total + 1;

total++;

total += 5;
total -= 4;
total *= 2;

// console.log(total);

// *** Structures de contrôles ***

let x = 2;
let y = 2;

// if (x > y) {
//   alert("Yes x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("Ils sont égaux");
// }

// On teste si la variable est "true"
if (x) {
  // console.log("x existe !");
}

// === test l'égalité en type et contenu
if (x === y) {
  // console.log("ils sont égaux");
} else {
  // console.log("pas égaux");
}

let a = 2;
let b = "2";
// == test l'égalité de valeur sans prendre en comptre le type
if (a == b) {
  // console.log("ils sont égaux");
} else {
  // console.log("pas égaux");
}

// || = ou
// && = et

// Le || il faut que l'un ou l'autre soit juste
if (x < y || x > 1) {
  // console.log("UI");
}

// Le && il faut que toutes les conditions soient réunies
if (x < y && x > 1) {
  console.log("UI");
}

// *** Les fonctions ***

// Fonction classique (à l'ancienne)
function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("Calcul terminé !");
}

// Il faut impérativement la function pour quelle se joue
// appel de la function : faireQuelqueChose();

// Fonction fléchée

const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(432, 57895);

// *** La portée des variables ***

function add2() {
  let num = 4;
  console.log(num + 2);
}
