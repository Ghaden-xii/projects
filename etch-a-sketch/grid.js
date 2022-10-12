const container = document.querySelector('#container');
const divs = document.querySelectorAll('.sons');
for (let i = 0; i < 16; i++) {
    let columns = document.createElement('div');
    columns.classList.toggle('divs');
    container.appendChild(columns);
    for (let i = 0; i < 16; i++) {
        let rows = document.createElement('div');
        rows.classList.toggle('sons');
        columns.appendChild(rows);
        rows.addEventListener('mouseover', () => {
            let randomHex = Math.floor(Math.random()*0xFFFFFF);
            randomHex = randomHex.toString(16);
            let randomColor = randomHex.padStart(6,0);
            randomColor = randomColor.toUpperCase();
            rows.classList.toggle('hover');
            
        });

    }
}


