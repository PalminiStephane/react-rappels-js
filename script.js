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


//Version One Liner
const playersUnder30 = tennisPlayers.filter(player => player.age <= 30);

//On assigne des valeurs booleenes pour séparer nos conditions
const playersUnder30AndShortName = tennisPlayers.filter((player) => {
    //D'abord, on évalue si l'âge est inférieur ou égal à 30
    const under30 = player.age <= 30;
    //Puis on évalue la longueur du nom
    const shortName = player.name.length <= 5;

    //Et on retourne si age < 30 ET nom court
    return under30 && shortName;
});

console.log(tennisPlayers);
console.log(playersUnder30);

const playerIsUnder30 = (player) => player.age <= 30;
const playerHasShortName =(player) => player.name.lenght <= 5;

const playersUnder30ShortName = tennisPlayers.filter(playerIsUnder30)
                                             .filter(playerHasShortName)
                           
console.log(playersUnder30ShortName);
playersUnder30ShortName.forEach(player => {console.log(`Joueur restant : ${player.name}`)});

console.log("=== .find dans un tableau ===");
const drones = [
    {
        id: 1,
        name: 'Parrot'
    },
    {
        id: 2,
        name: 'Dji Phantom'
    },
    {
        id: 3,
        name: 'Drone Drone'
    },
    {
        id: 4,
        name: 'Dronus Maximus'
    },
];

/*
const droneId3 = drones.filter((drone) => drone.id === 3)[0];
console.log(droneId3);
*/

//.find sert à ne garder qu'un seul élément dans le tableau qui correspond
//à la condition passée en valeur de retour du callback
//Ici : on ne garde que le drone qui a un id de 3
const droneId3 = drones.find((drone) => drone.id === 3);
console.log(`le drone qui a un id de 3 est le ${droneId3.name}`);
//console.log("le drone qui a un id est :");
//console.log(droneId3);

console.log("=== .map dans un tableau ===");
//ca nous permets de transformer des resultats en chaine de caractères
const dancers = [
    {
        firstName: 'Dancer',
        lastName: 'Dancington',
        age: 70
    },
    {
        firstName: 'Kamel',
        lastName: 'Ouali',
        age: 27
    },
    {
        firstName: 'Kamel',
        lastName: 'Oualou',
        age: 35
    },
    {
        firstName: 'Mickael',
        lastName: 'Jackson',
        age: 200
    },
    {
        firstName: 'Ouali',
        lastName: 'Oualou',
        age: 12
    },
];

//.map servira à modifier tous les éléments d'un tableau un par un 
//dans ce cas, on renvoie un tableau modifié qui contient un nouvel objet
//fullName, la concaténation du firstName et lastName
//et old, un booléen qui dit si le danceur a plus de 60 ans

//Ca c'est génial pour formater nos retours d'API
const formattedDancers = dancers.map((dancer) => {
    return {
        fullName:`${dancer.firstName}${dancer.lastName}`,
        old: dancer.age >= 60
    }
});
console.log(formattedDancers);

const mappedDancers = dancers.map((dancer) => {
    return `Bonjour je suis ${dancer.firstName} ${dancer.lastName} et j'ai ${dancer.age}`
});
console.log(dancers);
console.log(mappedDancers);



