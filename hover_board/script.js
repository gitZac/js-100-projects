
const container = document.getElementById('container');
const SQUARES = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', function(){
        setColor(square);
    });

    square.addEventListener('mouseout', function(){
        removeColor(square);
    });

    container.appendChild(square);
}

function setColor(el){
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el){
    el.style.background = '#1d1d1d';
    el.style.boxShadow = 'none';
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}