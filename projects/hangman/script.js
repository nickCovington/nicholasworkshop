const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['cellar', 'vinegar', 'olive', 'plum', 'photosynthesis', 'megaphasma', 'innocence', 'imagination', 'carpenter', 'primordial', 'battlement', 'pearlescent', 'thunderstorm', 'icicle', 'vespoidea', 'crenulations', 'phantom', 'bulwark', 'kraken', 'transylvania'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// show blank letters of secret word
function displayWord(){
    wordEl.innerHTML = 
    `${selectedWord
        .split('')
        .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')
    }`;

    const innerWord = wordEl.innerText.replace(/\n/g, '');
    
    if (innerWord === selectedWord){
        finalMessage.innerText = 'You Win  8^)';
        popup.style.display = 'flex';
        console.log("Player has won the game");
    }
}

// update wrong letters
function updateWrongLettersEl(){
    // show wrong letters
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong:</>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // show hanged man parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index < errors){
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // play lost the game
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'You Lose  8^(';
        popup.style.display = 'flex';
    }
}

function showNotification(){
    notification.classList.add('show');

    setTimeout(()=> {
        notification.classList.remove('show');
    }, 2000);
}

// keydown letter press
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if (selectedWord.includes(letter)){
            // if user enters correct letter, add it to correct arr
            if (!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            // if incorrect letter, show notification
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});

// restart game if button is clicked
playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
});

displayWord();