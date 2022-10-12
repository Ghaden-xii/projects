const container = document.querySelector('#container');
const divs = document.querySelectorAll('.sons');
const newDivs = document.querySelector('#grid-divs');
let gridValue = 16;

function changeColor(gridValue) {
    for (let i = 0; i < gridValue; i++) {
        let columns = document.createElement('div');
        columns.classList.toggle('divs');
        container.appendChild(columns);
        for (let j = 0; j < gridValue; j++) {
            let rows = document.createElement('div');
            rows.classList.toggle('sons');
            columns.appendChild(rows);
            rows.addEventListener('mouseover', () => {
                let randomHex = Math.floor(Math.random()*0xFFFFFF);
                randomHex = randomHex.toString(16);
                let randomColor = randomHex.padStart(6,0);
                randomColor = randomColor.toUpperCase();
                rows.classList.toggle('hover');
                rows.style.background = '#'+randomColor;
            });
        }
    }    
}
function cleanContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);        
    }
  }
newDivs.addEventListener('click',() => {
    cleanContainer(container);
    gridValue = parseInt(prompt('change grid size to: '));
    changeColor(gridValue);
    return gridValue
})

changeColor(gridValue);


