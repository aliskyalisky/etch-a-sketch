const gridContainer = document.querySelector('.grid-container');
const sizeButton16 = document.querySelector('.size16');
const sizeButton32 = document.querySelector('.size32');
const drawTool = document.querySelector('.drawtool');
const eraseTool = document.querySelector('.erasetool');
const clearButton = document.querySelector('.clear')
let gridItems;
let currentTool = 1;

function createGrid(x) {
    if (x === 16) {
        gridContainer.classList.remove('grid32');
        gridContainer.classList.add('grid16');
    }
    if (x === 32) {
        gridContainer.classList.remove('grid16');
        gridContainer.classList.add('grid32');
    }

if (x <= 32) {
    for (let i = 0; i < (x * x); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
    }
    draw();
}

createGrid(16);


    sizeButton16.addEventListener('click', () => {
        clearGrid();
        createGrid(16);
    });

    sizeButton32.addEventListener('click', () => {
        clearGrid();
        createGrid(32);
    });

    drawTool.addEventListener('click', () => {
       currentTool = 1;
    });

    eraseTool.addEventListener('click', () => {
        currentTool = 2;
     });

     clearButton.addEventListener('click', () => {
        clearGrid();
        currentTool = 1;
     });




function draw() {
gridItems = document.querySelectorAll('.grid-item')

for (let i = 0 ; i < gridItems.length; i++) {
    
    gridItems[i].addEventListener('mouseover', (e) => {

        if (currentTool === 1) {
        gridItems[i].classList.add('grid-item-black');
        }
        if (currentTool === 2)
        gridItems[i].classList.remove('grid-item-black');
    });

}
}

function clearGrid() {
    gridContainer.innerHTML = '';
}
