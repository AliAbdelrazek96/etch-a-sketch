

//create the parent div
const body = document.querySelector('body')
const parentDiv = document.createElement('div')
parentDiv.classList.add('parent-div');
body.appendChild(parentDiv)


//create popup
const openPopupButton = document.getElementById('openPopup');

openPopupButton.addEventListener('click', function() {
    let gridSize;
  do { gridSize = Number(prompt("How many squares per side?"))
} while(isNaN(gridSize) || gridSize < 1 || gridSize > 100)
  //store the entered number in a variable
    //repeat the prompt as long as the value is NaN or < 1 or > 100
 //remove the grid when new input is given
    while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild)
 }

 let gridItemWidth = 100/gridSize + '%';
    // add grid items with a for loop
   //use a for loop to create 256 grid items! (16 x 16)
for (let i = 1; i <= gridSize * gridSize; i++) {
    const gridItem = document.createElement('div') // create a new div with each iteration
    gridItem.classList.add('grid-item');
    gridItem.style.flexBasis = gridItemWidth;
    //the height is fixed at 50px; but the width is 
    //gunna use the flexbox minimum flexbasis of gridItemWidth
    //which is 100 / desired gridsize
    parentDiv.appendChild(gridItem);
    //change background color when a div is clicked
    gridItem.addEventListener('mouseout', function() {
        gridItem.style.backgroundColor = generateRandomColor();
    })

}

})


function generateRandomColor() {
    //generate random RGB values
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}


