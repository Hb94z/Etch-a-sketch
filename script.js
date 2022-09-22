
function startingGrid() {
    
let initialGridContainer = document.querySelector(".gridcontainer");
let defGrid = document.createElement('div');
defGrid.classList = ('block');
defGrid.textContent = 'hi';
defGrid.style.height = '1.95px';
defGrid.style.width = '1.95px';
initialGridContainer.appendChild(defGrid);
}

let newGrid = document.querySelector('button')
newGrid.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
        deleteChild();
        let userInput = howMany();
        let input = userInput * userInput;
        let pixel = 500 / userInput;
        for (let i = 0; i < input; i++) {
        let i = addGrid(pixel)
    }}
});

function howMany() {
    
    let userInput = prompt("how many?");
    return userInput
}

function addGrid(pixel) {

let container = document.querySelector(".gridcontainer");
let grid = document.createElement('div');
grid.classList = ('block');
grid.textContent = 'hi';
grid.style.height = pixel + 'px';
grid.style.width = pixel + 'px';
container.appendChild(grid);
}

function deleteChild() {

    let e = document.querySelector(".gridcontainer");
    let child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}