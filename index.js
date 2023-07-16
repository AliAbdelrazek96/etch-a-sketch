

//create the parent div
const body = document.querySelector('body')
const parentDiv = document.createElement('div')
parentDiv.classList.add('parent-div');
body.appendChild(parentDiv)

//use a for loop to create 256 grid items! (16 x 16)
for (let i = 1; i <= 256; i++) {
    const gridItem = document.createElement('div') // create a new div with each iteration
    gridItem.classList.add('grid-item');
    parentDiv.appendChild(gridItem);
}

