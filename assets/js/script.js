
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
var location = null;

var teamID = ["Skip", "Las Vegas Raiders", "Jacksonville Jaguars", "New England Patriots", "New York Giants", "Baltimore Ravens", "Tennessee Titans", "Detroit Lions",
"Atlanta Falcons", "Cleveland Browns", "Cincinnati Bengals", "Arizona Cardinals", "Philidelphia Eagles", "New York Jets", "San Francisco 49ers",
"Green Bay Packers", "Chicago Bears", "Kansas City Cheifs", "Washington Commanders", "Carolina Panthers", "Buffalo Bills",
"Indianapolis Colts", "Pittsburgh Steelers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Miami Dolphins", "Huston Texans", "New Orleans Saints",
"Denver Broncos", "Dallas Cowboys", "Los Angeles Chargers", "Las Angeles Rams", "Minnesota Vikings"];
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

        var homeTeamID = data.response[0].teams.home.id
        var awayTeamID = data.response[0].teams.away.id
        var homeTeamID1 = data.response[1].teams.home.id
        var awayTeamID1 = data.response[1].teams.away.id
        var homeTeamID2 = data.response[2].teams.away.id
        var awayTeamID2 = data.response[2].teams.away.id
        TeamImg(homeTeamID, awayTeamID);
        if (data.response[1] !== 0) {
            otherGames(homeTeamID1, awayTeamID1)
        };
        if (data.response[2] !== 0) {
            otherGames2(homeTeamID2, awayTeamID2)
        }
    })

}; 

function TeamImg(homeTeamID, awayTeamID){;
     var homeImg = document.createElement("img");
     homeImg.src = 'https://media.api-sports.io/american-football/teams/' + homeTeamID + '.png';
     var homeSrc = document.getElementById("home-team-logo");
     homeSrc.appendChild(homeImg);
     var home = teamID[homeTeamID];
     document.getElementById("home").innerHTML = home

     var awayImg = document.createElement("img");
     awayImg.src = 'https://media.api-sports.io/american-football/teams/' + awayTeamID + '.png';
     var awaySrc = document.getElementById("away-team-logo");
     awaySrc.appendChild(awayImg)
     var away = teamID[awayTeamID];
     document.getElementById("away").innerHTML = away
 };
    
function otherGames(homeTeam, awayTeam){
    var home = teamID[homeTeam];
    var away = teamID[awayTeam];
    document.createElement("ul")
    document.getElementById("game2").innerHTML = home + " VS " + away;
};

function otherGames2(homeTeam, awayTeam){
    var home = teamID[homeTeam];
    var away = teamID[awayTeam];
    document.createElement("ul")
    document.getElementById("game3").innerHTML = home + " VS " + away;
};
//Weather API function
//need function to fill var latLong


function getWeather() {
   var requestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=WNRU679QQP5CDJZWL8EN8LWH9`;


   fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};

