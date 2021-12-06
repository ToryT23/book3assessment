import { getChildren } from "./database.js"
// add an addEventLister to display the child's name and what the child's wish is when each kid is clicked.

document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target
    if(itemClicked.id.startsWith("child")){
    const[,childId] = itemClicked.id.split("--")
    
    for (const child of children) {
    if(child.id === parseInt(childId)){
    window.alert(`${child.name} wish is ${child.wish} `)
    }
    }
    }
    }
)


const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        // create an ID for child and add an interpolation
        html += `<li id="child--${child.id}" >${child.name}</li>`
    }

    html += "</ol>"
    return html
}

