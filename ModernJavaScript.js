import fetch from "node-fetch";

const url = "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=240";

class Achievement {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }

  printValues() {
    if (this.percent === 0) {
      console.log(`No one has completed the achievement: ${this.name}.`);
    } else {
      console.log(`${this.name} achievement has been completed by ${this.percent}% of people.`);
    }
  }
}

async function fetchData(url) {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  printData(jsonResponse);
}

function printData(jsonData) {
  var achievementsArray = [];
  const jsonObject = jsonData["achievementpercentages"];
  const allachievements = jsonObject["achievements"];
  for (let achievement of allachievements) {
    var name = achievement["name"];
    let percent = achievement["percent"];
    // console.log(achievement["name"]);
    let newAchievement = new Achievement(name, percent);
    newAchievement.printValues();
    achievementsArray.push(newAchievement);
  }
  console.log(achievementsArray.length);
}

fetchData(url).catch(function () {
  console.log("Could not fetch data");
});
