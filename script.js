// contact page copy btns
function copyAddress(){
    let copyText = document.getElementById('address').innerHTML;
    navigator.clipboard.writeText(copyText);
    console.log('copy-btn was just clicked');
}

function copyPhone(){
    let copyText = document.getElementById('phone-number').innerHTML;
    navigator.clipboard.writeText(copyText);
    console.log('copy-btn was just clicked');
}

function copyEmail(){
    let copyText = document.getElementById('email').innerHTML;
    navigator.clipboard.writeText(copyText);
    console.log('copy-btn was just clicked');
}

function copyEmail2(){
    let copyText = document.getElementById('email2').innerHTML;
    navigator.clipboard.writeText(copyText);
    console.log('copy-btn was just clicked');
}