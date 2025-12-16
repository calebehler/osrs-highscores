async function loadPlayerData(username) {
  
  
  const url = "https://cors-anywhere.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=".concat(username);
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok){
      throw new Error('Response status: ${response.status}');
    }

    const result = await response.json();
    console.log(result);

    /* Populate the Skills Tab */

    document.getElementById("attackLevel").innerText=result.skills[1].level;
    document.getElementById("defenceLevel").innerText=result.skills[2].level;
    document.getElementById("strengthLevel").innerText=result.skills[3].level;
    document.getElementById("hitpointsLevel").innerText=result.skills[4].level;
    document.getElementById("rangedLevel").innerText=result.skills[5].level;
    document.getElementById("prayerLevel").innerText=result.skills[6].level;
    document.getElementById("magicLevel").innerText=result.skills[7].level;
    document.getElementById("cookingLevel").innerText=result.skills[8].level;
    document.getElementById("woodcuttingLevel").innerText=result.skills[9].level;
    document.getElementById("fletchingLevel").innerText=result.skills[10].level;
    document.getElementById("fishingLevel").innerText=result.skills[11].level;
    document.getElementById("firemakingLevel").innerText=result.skills[12].level;
    document.getElementById("craftingLevel").innerText=result.skills[13].level;
    document.getElementById("smithingLevel").innerText=result.skills[14].level;
    document.getElementById("miningLevel").innerText=result.skills[15].level;
    document.getElementById("herbloreLevel").innerText=result.skills[16].level;
    document.getElementById("agilityLevel").innerText=result.skills[17].level;
    document.getElementById("thievingLevel").innerText=result.skills[18].level;
    document.getElementById("slayerLevel").innerText=result.skills[19].level;
    document.getElementById("farmingLevel").innerText=result.skills[20].level;
    document.getElementById("runecraftLevel").innerText=result.skills[21].level;
    document.getElementById("hunterLevel").innerText=result.skills[22].level;
    document.getElementById("constructionLevel").innerText=result.skills[23].level;
    document.getElementById("totalLevel").innerText=result.skills[0].level;

    document.getElementById("playerName").innerText=result.name;
    document.getElementById("totalXP").innerText=result.skills[0].xp;


    /* Populate the Bosses Tab */
    document.getElementById("abyssal-sire-kills").innerText=result.activities[20].score;


  } catch (error) {
    console.error(error.message);
  }
}



