let firstUl = document.querySelector(".big-five-list")
let firstList = document.querySelectorAll(".big-five-button")
let firstListItems = Array.from(firstList)
let secondUl = document.getElementsByTagName("ul")[1]


//Deel 1:
//Add a spotted animal to the list
firstListItems.map((e, i) => {
    e.addEventListener('click', () => {
        if (i === 0) {
            let lion = document.createElement("li")
            lion.innerHTML = "Lion"
            secondUl.appendChild(lion)
            console.log("Lion")
        }
        else if (i === 1) {
            let leopard = document.createElement("li")
            leopard.innerHTML = "Leopard"
            secondUl.appendChild(leopard)
            console.log("Leopard")
        }
        else if (i === 2) {
            let elephant = document.createElement("li")
            elephant.innerHTML = "Elephant"
            secondUl.appendChild(elephant)
            console.log("Elephant")
        }
        else if (i === 3) {
            let rhino = document.createElement("li")
            rhino.innerHTML = "Rhino"
            secondUl.appendChild(rhino)
            console.log("Rhino")
        }
        else {
            let buffalo = document.createElement("li")
            buffalo.innerHTML = "Buffalo"
            secondUl.appendChild(buffalo)
            console.log("Buffalo")
        }

    })
})


//Deel 2:
//Remove first list item
let removeFirstAnimal = document.getElementById("remove-first-item-button")
removeFirstAnimal.addEventListener("click", () => {
    let secondUlli = document.getElementById("spotted-animals-list").getElementsByTagName("li")[0]
    secondUl.removeChild(secondUlli)
})


//Deel 3:
//Remove All list item
let removeAll = document.getElementById("remove-all-button")
removeAll.addEventListener("click", () => {
    let allSpottedAnimals = document.getElementById("spotted-animals-list").getElementsByTagName("li")
    let newArray = Array.from(allSpottedAnimals)
    newArray.map(e => secondUl.removeChild(e))
})



