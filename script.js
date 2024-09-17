const startButton = document.getElementById('start-button');
const sequenceContainer = document.getElementById('sequence-container');
const inputContainer = document.getElementById('input-container');
const levelContainer = document.getElementById('level');
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
let sequence = [];
let userSequence = [];
let level = 1;

startButton.addEventListener('click', startGame);

function startGame() {
    sequence = [];
    userSequence = [];
    level = 1;
    levelContainer.textContent = level;
    nextLevel();
}

function nextLevel() {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(nextColor);
    displaySequence();
}

function displaySequence() {
    sequenceContainer.innerHTML = '';
    sequence.forEach((color, index) => {
        setTimeout(() => {
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = color;
            sequenceContainer.appendChild(colorBox);
        }, index * 1000);
    });

    setTimeout(() => {
        sequenceContainer.innerHTML = '';
        getUserInput();
    }, sequence.length * 1000);
}

function getUserInput() {
    inputContainer.innerHTML = '';
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        colorBox.addEventListener('click', () => handleUserInput(color));
        inputContainer.appendChild(colorBox);
    });
}

function handleUserInput(color) {
    userSequence.push(color);
    if (userSequence.length === sequence.length) {
        checkSequence();
    }
}

function checkSequence() {
    if (userSequence.join('') === sequence.join('')) {
        alert('صحيح! الانتقال إلى المستوى التالي.');
        level++;
        levelContainer.textContent = level;
        userSequence = [];
        nextLevel();
    } else {
        alert('خطأ! حاول مرة أخرى.');
    }
}
