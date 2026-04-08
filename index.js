import { addClick, returnClicks } from './Modules/data.js'

const button = document.getElementById("button")
const clickText = document.getElementById("ClickText")

let debounce = false

button.addEventListener("click", OnClicked)

function updateClickText() {
    clickText.textContent = "Amount of Clicks: " + returnClicks()
}

updateClickText()

function OnClicked() {
    if (debounce) {
        return
    }

    debounce = true
    
    button.src = "Images/pressed.png"
    
    addClick(1)
    updateClickText()

    console.log(returnClicks)

    setTimeout(
        () => {button.src = "Images/button.png"},
        750
    )

    setTimeout(
        () => {debounce = false},
        1000
    )
}