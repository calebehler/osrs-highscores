function submitPlayerName(){

    var playerName = (document.getElementById("username-input").value);

    if(playerName == ""){
        return false;
    }
    else{
    console.log("Received player name: " + playerName);
    loadPlayerData(playerName);
    }

    document.getElementById("submitPlayerName").reset();


}

function showBossesTab(){
    document.getElementById("mainTab1").hidden;
}