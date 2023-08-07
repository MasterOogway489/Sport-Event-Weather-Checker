
// AMERICAN-FOOTBALL-API

// api keys:  
// 'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
// 'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
var teamIdEl = document.getElementById("search-input");
var formEl = document.getElementById("search-form");
var homeTeamID
var awayTeamID
var homeTeamID1
var homeTeamID2
var awayTeamID1
var awayTeamID2
var date
var location
var otherGamesEl = document.getElementById("other-games");


var teamID = ["Skip", "Las Vegas Raiders", "Jacksonville Jaguars", "New England Patriots", "New York Giants", "Baltimore Ravens", "Tennessee Titans", "Detroit Lions",
"Atlanta Falcons", "Cleveland Browns", "Cincinnati Bengals", "Arizona Cardinals", "Philidelphia Eagles", "New York Jets", "San Francisco 49ers",
"Green Bay Packers", "Chicago Bears", "Kansas City Chiefs", "Washington Commanders", "Carolina Panthers", "Buffalo Bills",
"Indianapolis Colts", "Pittsburgh Steelers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Miami Dolphins", "Huston Texans", "New Orleans Saints",
"Denver Broncos", "Dallas Cowboys", "Los Angeles Chargers", "Los Angeles Rams", "Minnesota Vikings"];
// NEW YORK JETS DOES NOT HAVE A LOGO FOR SOME REASON


// store date variable from datepicker
function getDate(){
    var selectedDate = $("#datepicker").datepicker("getDate");
    console.log(dayjs(selectedDate).format("YYYY-MM-DD"))
    var date = dayjs(selectedDate).format("YYYY-MM-DD")
    getGameInfo(date);

};
    
function getGameInfo(date) {
    var url = `https://api-american-football.p.rapidapi.com/games?date=${date}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
    .then(function(res) {
        console.log(res.status)
        return res.json();
    })
    .then(function(data) {
        console.log(data)

        if (data.results === 0) {
            throw new Error("No Games Found")
        }
        var responseLength = data.response.length
        var location = data.response[0].game.venue.city
        var homeTeamID = data.response[0].teams.home.id
        var awayTeamID = data.response[0].teams.away.id
        var homeTeamID1 = data.response
        var awayTeamID1 = data.response
        // var homeTeamID2 = data.response[2].teams.away.id
        // var awayTeamID2 = data.response[2].teams.away.id
        TeamImg(homeTeamID, awayTeamID);
        // if (data.response[1] !== 0) {
            otherGames(homeTeamID1, awayTeamID1, responseLength)
        // };
        // if (data.response[2] !== 0) {
        //     otherGames2(homeTeamID2, awayTeamID2)
        // }
        var gameData = {
            location: location,
            homeTeamID: homeTeamID,
            awayTeamID: awayTeamID,
            homeTeamID1: homeTeamID1,
            awayTeamID1: awayTeamID1,
        };
        localStorage.setItem('gameData', JSON.stringify(gameData));
        retrieveGameData();
        getWeather(location, date)
    })

}; 


function TeamImg(homeTeamID, awayTeamID){
    
     var homeImg = document.getElementById("home-team-logo");
     homeImg.src = 'https://media.api-sports.io/american-football/teams/' + homeTeamID + '.png';
     var home = teamID[homeTeamID];
     document.getElementById("home").innerHTML = home

     var awayImg = document.getElementById("away-team-logo");
     awayImg.src = 'https://media.api-sports.io/american-football/teams/' + awayTeamID + '.png';
     var away = teamID[awayTeamID];
     document.getElementById("away").innerHTML = away
 };
    
function otherGames(homeTeam, awayTeam, responseLength){

    
    
    if (otherGamesEl.childElementCount > 0) {
        otherGamesEl.innerHTML = "";
    }
    var gamesArray = [];

    for (var i = 1; i < responseLength; i++) {
    var home = teamID[homeTeam[i].teams.home.id];
    var away = teamID[awayTeam[i].teams.away.id];
    var gameString = home + " VS " + away;

    gamesArray.push(gameString);
    var list = document.createElement("ul");
    list.textContent = gameString;
    document.getElementById("other-games").appendChild(list);
    }
    var gamesJsonString = JSON.stringify(gamesArray);
    localStorage.setItem("savedData", gamesJsonString);

    // document.getElementById("game2").innerHTML = home + " VS " + away;
    }

// function otherGames2(homeTeam, awayTeam){
//     var home = teamID[homeTeam];
//     var away = teamID[awayTeam];
//     document.createElement("ul")
//     document.getElementById("game3").innerHTML = home + " VS " + away;
// };
//Weather API function
//need function to fill var latLong


function getWeather(location, date) {
   var requestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=WNRU679QQP5CDJZWL8EN8LWH9`;


   fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let currentTemp = data.days[0].temp;
        let currentWind = data.days[0].windspeed;
        let currentHumidity = data.days[0].humidity;
        let description = data.days[0].description;

        date = dayjs(date).format("MM/DD/YYYY");
        
        let weatherTitleEl = document.getElementById("weather-title");
        let currentTempEl = document.getElementById("current-temp");
        let currentWindEl = document.getElementById("current-wind-speed");
        let currentHumidityEl = document.getElementById("current-humidity");
        let descriptionEl = document.getElementById("description");
        weatherTitleEl.textContent = `Weather for ${location} on ${date}`;
        currentTempEl.textContent = `Temp: ${currentTemp}°F`;
        currentHumidityEl.textContent = `Humidity: ${currentHumidity}%`;
        currentWindEl.textContent = `Wind: ${currentWind} MPH`;
        descriptionEl.textContent = description;
        var weatherData = {
            currentTemp: currentTemp,
            currentWind: currentWind,
            currentHumidity: currentHumidity,
            description: description,
        };
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        retrieveWeatherData();

    });
    };
    document.getElementById("resetButton").addEventListener('click', function() {
        document.getElementById("other-games").innerText = "";
    })
    function retrieveGameData() {
        const storedDataString = localStorage.getItem('gameData');
    
        if (storedDataString) {
            const storedData = JSON.parse(storedDataString);
            console.log(storedData.location);
            console.log(storedData.homeTeamID);
            console.log(storedData.awayTeamID);
        } else {
            console.log('No data found in localStorage.');
        }
    }
        function retrieveWeatherData() {
            const storedDataString = localStorage.getItem('weatherData');
        
            if (storedDataString) {
                const storedData = JSON.parse(storedDataString);
                console.log(storedData.currentTemp);
                console.log(storedData.currentWind);
                console.log(storedData.currentHumidity);
            } else {
                console.log('No data found in localStorage.');
            }
    }
    function parseAndAppendGameData() {
        const gamesDataString = localStorage.getItem("savedData");
    
        if (gamesDataString) {
            const gamesArray = JSON.parse(gamesDataString);
            const otherGamesEl = document.getElementById("savedGames");
            otherGamesEl.innerHTML = "";
            const ul = document.createElement("ul");
    
            gamesArray.forEach(gameString => {
                const li = document.createElement("li");
                li.textContent = gameString;
                ul.appendChild(li);
            });
            otherGamesEl.appendChild(ul);
        }
    }
 parseAndAppendGameData();
