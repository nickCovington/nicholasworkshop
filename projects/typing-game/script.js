const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');


 const words = ['apocalyptic',    'equilibrium',    'mitigate',    'serpentine',    'bamboozled',    'exquisite',    'nefarious',    'silhouette',    'bizarre',    'flippant',    'onomatopoeia',    'sinister',    'blasphemy',    'gerrymandering',    'persnickety',    'statuesque',    'bumblebee',    'hyperbolic',    'phosphorous',    'stoicism',    'capricious',    'hypnosis',    'picturesque',    'synergistic',    'clandestine',    'incognito',    'plebeian',    'tectonic',    'cognizant',    'indigo',    'quadrinomial',    'totalitarian',    'conundrum',    'insidious',    'quintessential',    'trapezoid',    'corrosion',    'kaleidoscope',    'rambunctious',    'ubiquitous',    'crestfallen',    'kleptomania',    'reptilian',    'vermillion',    'dastardly',    'languish',    'sabotage',    'villainous',    'diabolical',    'luminescence',    'sanctimonious',    'whimsical',    'dwindling',    'melancholy',    'scrupulous',    'wizardry',    'effervescent',    'mercurial',    'serendipity',    'zigzag'];

 let randomWord;
 let score = 0;
 let time = 10;


//  on start, set difficulty from local storage 
 let difficulty = localStorage.getItem('difficulty') !== null ?
        localStorage.getItem('difficulty') : 'medium';
// update DOM to show correct difficulty
difficultySelect.value = localStorage.getItem('difficulty') !== null ?
        localStorage.getItem('difficulty') : 'medium';

//  focus into text box on page load
text.focus();

// update timer every 1s
const timeInterval = setInterval(updateTime, 1000);

 function getRandomWord(){
     return words[Math.floor(Math.random() * words.length)];
 }

 function addWordToDOM(){
     randomWord = getRandomWord();
     word.innerHTML = randomWord;
 }

 function updateScore(){
     score++;
     scoreEl.innerHTML = score;
 }

 function updateTime(){
     time--;
     timeEl.innerHTML = time + 's';

     if(time ===0){
         clearInterval(timeInterval);
        gameOver();
     }
 }

 function gameOver(){
     endgameEl.innerHTML = `
        <h1>Time Extinguished</h1>
        <p>You got ${score} words. Not bad</p>
        <button onclick="location.reload()">Reload</button>
     `;

     endgameEl.style.display = 'flex';
 }

 addWordToDOM();

 text.addEventListener('input', e => {
    //  parses what user types into text field
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();

        e.target.value = '';

        if(difficulty === 'hard'){
            time += 2;
        } else if(difficulty === 'medium'){
            time += 4;
        } else{
            time += 5;
        }

        updateTime();
    }
 });

//  hide difficulty selector
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
});

settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});