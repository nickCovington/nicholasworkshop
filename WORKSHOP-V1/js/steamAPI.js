// steam api key: 490D7843AC4C62D62AD61BE9488D156A
// steam id: 76561198116628951

const apiURL = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=490D7843AC4C62D62AD61BE9488D156A&steamid=76561198116628951&format=json"

async function getPlaytime(url){

    const response = await fetch(url, {mode: "no-cors"});

    var data = await response.json();
    console.log(data);
}

getPlaytime(apiURL);