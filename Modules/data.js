let clicks = parseInt(localStorage.clicks)

if (clicks == undefined || localStorage.clicks == undefined) {
    clicks = 0
    localStorage.clicks = 0
    console.log(localStorage.clicks)
}

export function addClick(Number) {
    clicks += 1
    localStorage.clicks = clicks
    console.log("Updated. LocalStorage: " + localStorage.clicks)
}

export function returnClicks() {
    return clicks
}