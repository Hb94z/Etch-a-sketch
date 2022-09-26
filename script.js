starterGrid()

let colours = document.querySelector("div");
colours.addEventListener("mouseover", () => {
    event.target.classList.replace('block', 'Newblock')
});

let newGrid = document.querySelector('button')
newGrid.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
        let userInput = howMany();
          if (userInput > 100) { return }
        deleteChild();
        let input = userInput * userInput;
        let pixel = 500 / userInput;
        for (let i = 0; i < input; i++) {
        let i = addGrid(pixel);
        gridupdate(userInput);
    }}
});

function starterGrid () {
let userInput = 16;
let input = userInput * userInput;
let pixel = 500 / userInput;
  for (let i = 0; i < input; i++) {
    let i = addGrid(pixel)
}
}

function howMany() {

let userInput = prompt("Please enter number of tiles(maximum: 100)");
    if (userInput > 100) alert("Please try again with 100 or less tiles");
    return userInput
}

function addGrid(pixel, userInput) {

let container = document.querySelector(".gridcontainer");
let grid = document.createElement('div');
grid.classList = ('block');
grid.textContent = '';
grid.style.height = pixel + 'px';
grid.style.width = pixel + 'px';
container.appendChild(grid);
}

function gridupdate(userInput) {

let container = document.querySelector(".gridcontainer");
container.style.setProperty("grid-template-columns", `repeat(${userInput}, 2fr)`);
container.style.setProperty("grid-template-rows", `repeat(${userInput}, 2fr)`);
}

function deleteChild() {

let e = document.querySelector(".gridcontainer");
let child = e.lastElementChild; 
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}