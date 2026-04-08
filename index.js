const button = document.getElementById("button")
debounce = false

Clicks = 0
const ClickText = document.getElementById("ClickText")

button.addEventListener("click", OnClicked)

function updateClickText() {
    ClickText.textContent = "Amount of Clicks: " + Clicks
}

function OnClicked() {
    if (debounce) {
        return
    }

    debounce = true
    
    button.src = "Images/pressed.png"
    Clicks += 1

    print(Clicks)

    setTimeout(
        () => {button.src = "Images/button.png"},
        750
    )

    setTimeout(
        () => {debounce = false},
        1000
    )
}