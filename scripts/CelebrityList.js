import { getCelebrities } from "./database.js"
// I added an event listener to display the star name and the star's sport when clicked on
document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target
    if(itemClicked.id.startsWith("star")){
    const[,starId] = itemClicked.id.split("--")
    
    for (const star of celebrities) {
    if(star.id === parseInt(starId)){
    window.alert(`${star.name} is a ${star.sport} star`)
    }
    }
    }
    }
)

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        // this id below is necessary to use in my addEventListener
        html += `<li id="star--${star.id}">${star.name}</li>`
    }

    html += "</ol>"
    return html
}
