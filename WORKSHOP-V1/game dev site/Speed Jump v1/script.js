var character = document.getElementById("character");

var block = document.getElementById("block");

var gameover = document.getElementById("gameover");

//sounds
var boing = document.getElementById("boing");
var crash = document.getElementById("crash");
//possible bug?
//even though in my html i've set the audio to auto-load, it wouldn't work unless i manually loaded them like this
boing.load();
crash.load();

var scoreValue = document.getElementById("scoreValue").innerHTML;

//SPACEBAR to jump
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //your code
        if(character.classList != "animate"){
            character.style.backgroundImage = "url(jumpCharacter.png)";
            boing.play();
            scoreValue++; 
            console.log(scoreValue);
            document.getElementById("scoreValue").innerHTML = scoreValue;
            character.classList.add("animate");
            setTimeout(function(){
                character.style.backgroundImage = "url(character.png)";
            }, 500);
        }
    
        // we need to remove the "animate" class from the character once he's completed the jump, so that the player can jump repeatedly.
        // timeout=500ms because the jump animation takes 500ms
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
    }
}



// collision detection
var collisionCheck = setInterval(function(){
    // character's current position
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // obstacle's current position
    var barrelLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // ***GAME OVER***
    if(barrelLeft > 0 && barrelLeft < 50 && characterTop >= 150){
        //character's tripping animation
        character.style.backgroundImage = "url(endCharacter.png)";
        //once player loses, stop the barrels
        block.style.animation = "none";
        block.style.display = "none";
        //display "game over" text
        gameover.style.visibility = "visible";  
        //crashing sound effect 
        crash.play();
    }

}, 10)



//character running animation
var movingLegs = setInterval(function(){
    //i've rigged the animation as simply as i could manage
    //the motion alternates between 2 different player sprites to appear as if he's running
    if (character.style.backgroundImage != "url(character2.png)"){
        character.style.backgroundImage = "url(character2.png)";
    } else {
        character.style.backgroundImage = "url(character.png)";
    }
}, 300);


