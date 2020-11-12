'use strict';

// # 2-1_Syntax

console.log('--- Question 1 ---');
let x = 1
// [1] créer une variable x, et lui assigner un nombre

console.log('--- Question 2 ---');
console.log({x})
// [2] logguer cette variable dans la console avec console.log()

console.log('--- Question 3 ---');
function x10(nb) {
  return nb*10
}

console.log(x10(x))
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/

console.log('--- Question 4 ---');
function createRandomMax(maxValue) {
  return Math.floor(Math.random() * Math.floor(maxValue))
}

console.log(createRandomMax(4))
/* [4] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/

console.log('--- Question 5 ---');
/* [5] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];

nombres.forEach(nb => console.log(nb))

console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

const filterNombre = nombres.filter(nb => nb % 2 === 0)
console.log(filterNombre)

console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/

const greater100 = nombres.filter(nb => nb>100)
console.log(greater100)

console.log('--- Question 8 ---');
/* [8] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/

const nombresx10 = nombres.map(nb => x10(nb))
console.log(nombresx10)

console.log('--- Question 9 ---');
/* [9] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/

const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];

couleurs.forEach(item => {
  console.log(item, item.length)
})

console.log('--- Question 10 ---');
/* [10] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

const couleurLenght = couleurs.map(item => item.length)
console.log(couleurLenght)

console.log('--- Question 11 ---');
// [11] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string

function longueur(string) {
  return string.length
}

console.log('--- Question 12 ---');
// [12] reprendre le code de la question 10 mais en utilisant la fonction "longueur"

const colLenght = couleurs.map(longueur)
console.log(colLenght)

console.log('--- Question 13 ---');
// [13] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

personnes.push({nom: 'Jordan', date: '2020-11-05'})
personnes.push({nom: 'Michel', date: '2013-03-02'})

console.log(personnes)

console.log('--- Question 14 ---');
// [14] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()

const personnesName = personnes.map(item => item.nom)
console.log(personnesName)

console.log('--- Question 15 ---');
/* [15] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/

function calculerAge(ddn) {
  const Dateddn = new Date(ddn)
  const ageDif = Date.now() - Dateddn.getTime()
  const age = ageDif / 1000 / 60  / 60  / 24 / 365.25
  return Math.floor(age)
}

console.log('--- Question 16 ---');
// [16] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
const personnesAge = personnes.map(item => calculerAge(item.date))
console.log(personnesAge)