import fetch from "node-fetch";

// fetch("https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=240")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     console.log(JSON.stringify(myJson));
//   });

const url = "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=240";

async function fetchData(url) {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  printAchievements(jsonResponse);
}

function printAchievements(jsonData) {
  const percentages = jsonData["achievementpercentages"];
  const achievements = percentages["achievements"];
  for (let achievement of achievements) {
    console.log(achievement["name"]);
  }
}

fetchData(url).catch(function () {
  console.log("Could not fetch data");
});

const apiKey = "E134E90D9AB67809526B537ABCF67C9C";

const appId = "240";
