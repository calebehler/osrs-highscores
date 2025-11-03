function submitPlayerName(){

    var playerName = (document.getElementById("textbod").value);

    if(playerName == ""){
        return false;
    }
    else{
    console.log(playerName);
    loadPlayerData(playerName);
    }

}
