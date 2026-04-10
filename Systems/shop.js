const button = document.getElementById("shopButton")
const shopFrame = document.getElementById("shopFrame")

button.addEventListener("click", onClicked)

function onClicked() {
    console.log(shopFrame.checkVisibility())
    
    if (shopFrame.style.visibility == "hidden") {
        shopFrame.style.visibility = "visible"
        return
    } else {
        shopFrame.style.visibility = "hidden"
    }
}