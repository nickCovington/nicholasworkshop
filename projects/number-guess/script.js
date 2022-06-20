const msgEl = document.getElementById("msg");

const randomNum = getRandomNum();

console.log('Number: ', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

// capture user's speech
function onSpeak(e){
    const msg = e.results[0][0].transcript;
    
    writeMessage(msg);
    checkNumber(msg);
}

// show what user said
function writeMessage(msg){
    msgEl.innerHTML = `
        <div>You said: </div>
        <span class="box">${msg}</span>
    `;
}

// see if user guessed correctly
function checkNumber(msg){
    // adding '+' converts it to a number
    const num = +msg;

    if(Number.isNaN(num)){
        msgEl.innerHTML += `<div>[${msg}] is not a valid number</div>`;
        return;
    }

    if(num < 1 || num > 100){
        msgEl.innerHTML += '<div>Number must be between 1 - 100</div>';
        return;
    }

    if(num === randomNum){
        document.body.innerHTML = `
            <h2>Correct! You guessed it! <br><br> It was ${randomNum}</h2>
            <button class="play-again" id="play-again">Again?</button>
        `;
    }else if(num > randomNum){
        msgEl.innerHTML += '<div>TOO HIGH</div>'
    }else{
        msgEl.innerHTML += '<div>TOO LOW</div>'
    }
}

function getRandomNum(){
    return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListener('result', onSpeak);

// end speech recognition service
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
});
