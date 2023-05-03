const promoName = "Nazca";
//const va définir une variable constante
//ce sera notre choix par défaut pour définir une variable
//on utilisera toujours const SAUF si on doit pouvoir modifier la variable
//dans ce cas on utilisera let
//prmoName = "Une autre promo" nous donnerait une erreur

let greeting = "Bonjour les : ";
greeting = "Salut les :";

//Template literals
//Faire de manière simple de la concaténation de chaîne de caractères
//contenant des variables
//Toute valeur dans les ${} sera interprétée
console.log(`Ma chaîne de caractère est : ${greeting} ${promoName}`);

function sayHello(promoToGreet) {
    return `Hello les ${promoToGreet}`;
}

console.log(sayHello('Nasca'));

//Nouveau depuis ES6 : les fonctions fléchées(c'est une variable qui contient une fonction)
const otherSayHello = (promoToGreet) => {
    return `Hello les ${promoToGreet}`;
}

console.log(otherSayHello('Autre promo'));
console.log(otherSayHello('Encore un autre Hello'));

//Notion de return implicite
//Quand on met après la flèche une valeur entre parenthèses
//(et pas des accolades)
//Ce sera directement la valeur de retour de la fonction
const sum = (a,b) => (a+b);
/*
Ce code est équivalent à :
const sum = (a,b) => '
    return a + b;
}
Ou encore à
function sum(a,b) {
    return a + b;
}
*/
const sub = (a,b) => (a - b);
const mult = (a,b) => (a * b);
const division = (a,b) => (a / b);

const promos = [
    'Blop',
    'Flamel',
    'Méduse',
    'Minotaure',
    'Burger King',
    'Nazca'
];

for(let i = 0; i < promos.length; i++) {
    console.log(sayHello(promos[i]));
}

console.log("=== forEach ===");
//mdn foreach doc sur le net
promos.forEach(function(promo, index) {
    console.log(`Bonjour les ${promo}`);
    console.log(`Cette promo est à l'index ${index} du tableau.`);
});

const sayhelloToPromo = (promoName, index) => {
    console.log(`Hello les ${promoName}`);
    console.log(`Cette promo est à l'index ${index}`);

}
//sayHelloToPromo est une référence à la fonction définie ci-dessus
//forE  ch appelera le callback en lui passant automatiquement les paramètres
promos.forEach(sayhelloToPromo);

const tennisPlayers = [
    {
        name: "Nadal",
        age: 35
    },
    {
        name: "Federer",
        age: 40
    },
    {
        name: "Alcarazl",
        age: 20
    },
    {
        name: "Mdvedev",
        age: 25
    },
    {
        name: "Noha",
        age: 200
    },
    {
        name: "Sampras",
        age: 60
    },
    {
        name: "Williams",
        age: 30
    }
];

//Objectif : ne garder que les éléments du tableau "tennisPlayers" qui ont 30 ans et moins
//Version basique avec le for

/*
let playersUnder30 = [];
for(let i = 0; i < tennisPlayers.length; i++) {
    if(tennisPlayers[i].age <= 30) {
        playersUnder30.push(tennisPlayers[i]);
    }
}
*/

//Version One Liner
const playersUnder30 = tennisPlayers.filter(player => player.age <= 30);
const playersUnder30AndShortName = tennisPlayers.filter((player) => {

    const under30 = player.age <= 30;
    const shortName = player.name.length <= 5;

    return player.age <=30 && player.name.length <= 5
})

//Version intermediaire fonction fleché avec le if developpé
/*
const playersUnder30 = tennisPlayers.filter((player) => {
    if(player.age <= 30) {
        return true;
    } else {
        return false;
    }
});
*/
console.log(playersUnder30);