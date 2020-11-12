'use strict';

// # 4_DOM

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];

colors.forEach(color => {
    const el = document.createElement('div')
    const text = document.createTextNode(color)
    el.style.backgroundColor = color
    el.append(text)
    el.addEventListener("click", e => {
        console.log(color)
    })
    document.querySelector('#exo1').append(el)
})

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/
function createSection(id) {
    const section = document.createElement('section')
    section.setAttribute("id", id)
    document.body.append(section)
    return section
}

const section2 = createSection("exo2")

const carre = document.createElement('div')
carre.style.backgroundColor = "black"
carre.style.height = "50px"
carre.style.width = "50px"
carre.addEventListener('mousemove', e => {
    carre.style.height = e.clientY + "px"
    carre.style.width = e.clientX + "px"
})
section2.append(carre)


// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const section3 = createSection("exo3")

const randomDiv = document.createElement('div')
const Harry = document.createTextNode(names[0])

randomDiv.append(Harry)

section3.append(randomDiv)

section3.addEventListener("click", () => {
    section3.children[0].remove()
    const randomNames = Math.floor(Math.random()* names.length)
    const newDiv =  document.createElement('div')
    const name = document.createTextNode(names[randomNames])
    newDiv.append(name)
    section3.append(newDiv)
})

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const section4 = createSection("exo4")

const btn = document.createElement('button')
const btnText = document.createTextNode('Tracker')

btn.append(btnText)
section4.append(btn)

let track = true

function getMousePos(e) {
    const x = e.clientX
    const y = e.clientY
    console.log({ x }, { y })
}

btn.addEventListener("click", () => {
    if (track) {
        document.body.addEventListener("mousemove", getMousePos)
    } else {
        document.body.removeEventListener("mousemove", getMousePos)
    }
    track = !track
})


// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

const section5 = createSection('exo5')

const drag = document.createElement('div')
const dragText = document.createTextNode('Drag me')
drag.append(dragText)
section5.append(drag)

function DragMe(e) {
    drag.style.top = e.clientY + "px"
    drag.style.left = e.clientX + "px"
}

drag.addEventListener("mousedown", () => {
    drag.style.position= "fixed"
    window.addEventListener("mousemove", DragMe)
})

drag.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", DragMe)
})