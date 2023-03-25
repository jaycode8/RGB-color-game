let squares = 0;
const colorContainer = document.querySelector('.colorContainer section');
const headerSection = document.querySelector('.header');
const colorLabel = document.querySelector('.header span');

document.getElementById('date').innerHTML = new Date().getFullYear()

const change = () => {
    const gameMode = document.querySelector('select').value;
    if (gameMode == 'easy') {
        easyMode();
    } else {
        hardMode();
    }
};

const easyMode = () => {
    headerSection.style.background = '#202725';
    squares = 3;
    colorContainer.innerHTML = '';
    for (let i = 0; i < squares; i++){
        colorContainer.innerHTML += `<span class="span"></span>`;
    };
    let colors = generateRandomColors(squares);
    let gameColor = pickColor(colors);
    colorBoxes(colors);
    clickedColor(gameColor, colors);
};

const hardMode = () => {
    headerSection.style.background = '#202725';
    squares = 6;
    colorContainer.innerHTML = '';
    for (let i = 0; i < squares; i++) {
        colorContainer.innerHTML += `<span class="span"></span>`;
    };
    let colors = generateRandomColors(squares);
    let gameColor = pickColor(colors);
    colorBoxes(colors);
    clickedColor(gameColor, colors);
};

const resetGame = () => {
    if (document.querySelector('select').value == 'easy') {
        easyMode();
    } else {
        hardMode();
    }
};

const clickedColor = (gameColor, colors) => {
    document.querySelectorAll('.span').forEach(box => {
        box.addEventListener('click', (event) => {
            let clickedColor = event.target.style.background;
            if (clickedColor === gameColor) {
                headerSection.style.background = gameColor;
                for (let i = 0; i < colors.length; i++) {
                    document.querySelectorAll('.span')[i].style.background = gameColor;
                };
                alert('Congrates you got it right !! Click new game to refresh.');
            } else {
                event.target.style.background = '#202725';
                alert('OOPS... failed try again.');
            };
        });
    });
};

const colorBoxes = (colors) => {
    for (let i = 0; i < colors.length ; i++){
        document.querySelectorAll('.span')[i].style.background = colors[i];
    };
};

const pickColor = (colors) => {
    const rand = Math.floor(Math.random() * colors.length);
    colorLabel.innerHTML = colors[rand]
    return colors[rand]
}

const generateRandomColors = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    };
    return arr;
};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};

document.onload = easyMode()