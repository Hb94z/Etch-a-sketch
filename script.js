
starterGrid()

function starterGrid () {
    let userInput = 16;
    let input = userInput * userInput;
    let pixel = 500 / userInput;
    for (let i = 0; i < input; i++) {
    let i = addGrid(pixel)
}
}

let colours = document.querySelector("div");
colours.addEventListener("mouseover", () => {
    
    event.target.style.backgroundColor = 'black';
});

let reset = document.querySelector('#reset');
console.log(reset);
reset.addEventListener("click", () => {
colours.style.backgroundColor = 'white';

}
);

function resetCanvas() {
    let clear = document.querySelector('div');
clear.style.backgroundColor = 'white';
console.log(userInput)
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
grid.textContent = '';
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