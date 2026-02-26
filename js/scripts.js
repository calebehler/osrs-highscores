async function loadPlayerData(username) {
  
  
  const url = "https://api.allorigins.win/raw?url=https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=".concat(username);
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok){
      throw new Error('Response status: ${response.status}');
    }

    const result = await response.json();
    console.log(result);

    /* Populate the Overall stats */
    document.getElementById("player-name").innerText=username;
    document.getElementById("total-xp").innerText=result.skills[0].xp;
    document.getElementById("overall-rank").innerText=result.skills[0].rank;
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
    


    /* Populate the Bosses Tab */
    document.getElementById("abyssal-sire-kills").innerText=result.activities[20].score;
    document.getElementById("alchemical-hydra-kills").innerText=result.activities[21].score;
    document.getElementById("amoxliatl-kills").innerText=result.activities[22].score;
    document.getElementById("araxxor-kills").innerText=result.activities[23].score;
    document.getElementById("artio-kills").innerText=result.activities[24].score;
    document.getElementById("barrows-chests-kills").innerText=result.activities[25].score;
    document.getElementById("brutus-kills").innerText=result.activities[26].score;
    document.getElementById("bryophyta-kills").innerText=result.activities[27].score;
    document.getElementById("callisto-kills").innerText=result.activities[28].score;
    document.getElementById("calvarion-kills").innerText=result.activities[29].score;
    document.getElementById("cerberus-kills").innerText=result.activities[30].score;

    document.getElementById("chambers-xeric-kills").innerText=result.activities[31].score;
    document.getElementById("chambers-xeric-cm-kills").innerText=result.activities[32].score;

    document.getElementById("chaos-elemental-kills").innerText=result.activities[33].score;
    document.getElementById("chaos-fanatic-kills").innerText=result.activities[34].score;
    document.getElementById("commander-zilyana-kills").innerText=result.activities[35].score;
    document.getElementById("corporeal-beast-kills").innerText=result.activities[36].score;
    document.getElementById("crazy-archaeologist-kills").innerText=result.activities[37].score;
    document.getElementById("dagannoth-prime-kills").innerText=result.activities[38].score;
    document.getElementById("dagannoth-rex-kills").innerText=result.activities[39].score;
    document.getElementById("dagannoth-supreme-kills").innerText=result.activities[40].score;
    document.getElementById("deranged-archaeologist-kills").innerText=result.activities[41].score;
    document.getElementById("doom-kills").innerText=result.activities[42].score;
    document.getElementById("duke-sucellus-kills").innerText=result.activities[43].score;
    document.getElementById("general-graardor-kills").innerText=result.activities[44].score;
    document.getElementById("giant-mole-kills").innerText=result.activities[45].score;
    document.getElementById("grotesque-guardians-kills").innerText=result.activities[46].score;
    document.getElementById("hespori-kills").innerText=result.activities[47].score;
    document.getElementById("kalphite-queen-kills").innerText=result.activities[48].score;
    document.getElementById("king-black-dragon-kills").innerText=result.activities[49].score;
    document.getElementById("kraken-kills").innerText=result.activities[50].score;
    document.getElementById("kreearra-kills").innerText=result.activities[51].score;
    document.getElementById("kril-tsutsaroth-kills").innerText=result.activities[52].score;
    document.getElementById("lunar-chests-kills").innerText=result.activities[53].score;
    document.getElementById("mimic-kills").innerText=result.activities[54].score;
    document.getElementById("nex-kills").innerText=result.activities[55].score;
    document.getElementById("nightmare-kills").innerText=result.activities[56].score;
    document.getElementById("phosanis-nightmare-kills").innerText=result.activities[57].score;
    document.getElementById("obor-kills").innerText=result.activities[58].score;
    document.getElementById("phantom-muspah-kills").innerText=result.activities[59].score;
    document.getElementById("sarachnis-kills").innerText=result.activities[60].score;
    document.getElementById("scorpia-kills").innerText=result.activities[61].score;
    document.getElementById("scurrius-kills").innerText=result.activities[62].score;
    document.getElementById("shellbane-gryphon-kills").innerText=result.activities[63].score;
    document.getElementById("skotizo-kills").innerText=result.activities[64].score;
    document.getElementById("sol-heredit-kills").innerText=result.activities[65].score;
    document.getElementById("spindel-kills").innerText=result.activities[66].score;
    document.getElementById("tempoross-kills").innerText=result.activities[67].score;
    document.getElementById("the-gauntlet-kills").innerText=result.activities[68].score;
    document.getElementById("corrupted-gauntlet-kills").innerText=result.activities[69].score;
    document.getElementById("the-hueycoatl-kills").innerText=result.activities[70].score;
    document.getElementById("the-leviathan-kills").innerText=result.activities[71].score;
    document.getElementById("royal-titans-kills").innerText=result.activities[72].score;
    document.getElementById("the-whisperer-kills").innerText=result.activities[73].score;

    document.getElementById("theatre-blood-kills").innerText=result.activities[74].score;
    document.getElementById("theatre-blood-hm-kills").innerText=result.activities[75].score;

    document.getElementById("smoke-devil-kills").innerText=result.activities[76].score;

    document.getElementById("toa-kills").innerText=result.activities[77].score;
    document.getElementById("toa-em-kills").innerText=result.activities[78].score;

    document.getElementById("tzkal-zuk-kills").innerText=result.activities[79].score;
    document.getElementById("tztok-jad-kills").innerText=result.activities[80].score;
    document.getElementById("vardorvis-kills").innerText=result.activities[81].score;
    document.getElementById("venenatis-kills").innerText=result.activities[82].score;
    document.getElementById("vetion-kills").innerText=result.activities[83].score;
    document.getElementById("vorkath-kills").innerText=result.activities[84].score;
    document.getElementById("wintertodt-kills").innerText=result.activities[85].score;
    document.getElementById("yama-kills").innerText=result.activities[86].score;
    document.getElementById("zalcano-kills").innerText=result.activities[87].score;
    document.getElementById("zulrah-kills").innerText=result.activities[88].score;

    /* Populate the Minigames tab */
    document.getElementById("grid-points").innerText=result.activities[0].score;
    document.getElementById("league-points").innerText=result.activities[1].score;
    document.getElementById("deadman-points").innerText=result.activities[2].score;
    document.getElementById("bounty-hunter-hunter").innerText=result.activities[3].score;
    document.getElementById("bounty-hunter-rogue").innerText=result.activities[4].score;
    document.getElementById("clue-scrolls-all").innerText=result.activities[7].score;
    document.getElementById("clue-scrolls-beginner").innerText=result.activities[8].score;
    document.getElementById("clue-scrolls-easy").innerText=result.activities[9].score;
    document.getElementById("clue-scrolls-medium").innerText=result.activities[10].score;
    document.getElementById("clue-scrolls-hard").innerText=result.activities[11].score;
    document.getElementById("clue-scrolls-elite").innerText=result.activities[12].score;
    document.getElementById("clue-scrolls-master").innerText=result.activities[13].score;
    document.getElementById("lms-rank").innerText=result.activities[14].score;
    document.getElementById("pvp-arena-rank").innerText=result.activities[15].score;
    document.getElementById("soul-wars-zeal").innerText=result.activities[16].score;
    document.getElementById("rifts-closed").innerText=result.activities[17].score;
    document.getElementById("colosseum-glory").innerText=result.activities[18].score;
    document.getElementById("collections-logged").innerText=result.activities[19].score;

    
    
    
    




  } catch (error) {
    console.error(error.message);
  }
}



