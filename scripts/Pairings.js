import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    // call the variable to later retun after the for of loop and if statement
    let celebrityFound = null

    for (const celebrity of celebrityArray) {
        // this for look compares the celebrity to the kid's celebrity preference or
        //(celebrityId property that is located in the database)
    if (celebrity.id === (kidObject.celebrityId)){
        celebrityFound = celebrity
    } 
    }

    return celebrityFound
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        // changed 
        html += `
            <li>
          ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

