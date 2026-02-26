const outputDiv = document.getElementById('output');
let currentString = '';

document.addEventListener('keydown', (event) => {

    if (event.key.length === 1) {
        const char = event.key;
        
        if (isNaN(parseInt(char)) && char.match(/[a-zA-Zа-яА-Я]/)) {
            currentString += char.toUpperCase();
            outputDiv.textContent = currentString;
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        currentString = '';
        outputDiv.textContent = '';
    }
});