const snail = document.getElementById("snail");

snail.style.left = "50px";
let currentLeft = 0;
let movingRight = true;






function move_snail_right(){
    snail.style.transform = "scaleX(1)";

    if(currentLeft >= window.innerWidth - 100){
        movingRight = false;
    }

    currentLeft += 7;
    snail.style.left = currentLeft + "px";
}


function move_snail_left(){
    snail.style.transform = "scaleX(-1)";

    if(currentLeft <= 7){
        movingRight = true;
    }

    currentLeft -= 7;
    snail.style.left = currentLeft + "px";
}


function move_snail(){
    if (movingRight ? move_snail_right() : move_snail_left());
}












setInterval(move_snail, 100);