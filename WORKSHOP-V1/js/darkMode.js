function toggleDarkMode(){
    // document.body.style.background = "black";

    let body = document.body;
    body.classList.toggle("dark-mode");

    //make black text become white (so we can see it on the black background!)
    var elements = document.getElementsByClassName("dark-mode-text");
    for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
    }

    let darkStyle = document.getElementById("dark-stylesheet");


    if (darkStyle.href.includes('dark')){
        darkStyle.href = "";
        //make white text become black (so we can see it on the white background!)
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "black";
        }
    } else {
        darkStyle.href = "css/dark-mode.css";
    }


}