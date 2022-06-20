console.log("she workin baby");

const apiUrl = "https://uselessfacts.jsph.pl/random.json?language=en";

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    

    console.log(data.text);
    document.getElementById("fact").innerHTML = data.text;
}

getapi(apiUrl);

