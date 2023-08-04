
// AMERICAN-FOOTBALL-API

// api keys:  
// 'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
// 'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
var teamIdEl = document.getElementById("search-input");
var formEl = document.getElementById("search-form");
var homeTeamID = null;
var awayTeamID = null;

var latLong = cityWeather[homeTeamID];
var date = null;

var teamID = ["Skip", "Las Vegas Raiders", "Jacksonville Jaguars", "New England Patriots", "New York Giants", "Baltimore Ravens", "Tennessee Titans", "Detroit Lions",
"Atlanta Falcons", "Cleveland Browns", "Cincinnati Bengals", "Arizona Cardinals", "Philidelphia Eagles", "New York Jets", "San Francisco 49ers",
"Green Bay Packers", "Chicago Bears", "Kansas City Cheifs", "Washington Commanders", "Carolina Panthers", "Buffalo Bills",
"Indianapolis Colts", "Pittsburgh Steelers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Miami Dolphins", "Huston Texans", "New Orleans Saints",
"Denver Broncos", "Dallas Cowboys", "Los Angeles Chargers", "Las Angeles Rams", "Minnesota Vikings"];
// NEW YORK JETS DOES NOT HAVE A LOGO FOR SOME REASON
// Each index element of cityWeather corresponds to the same index of teamID's home stadium
var cityWeather = ['Skip', '36.0909,115.1833', '30.3239,81.6373', '42.0909,71.2643', '40.8135,74.0745', "39.2780,76.6227", '36.1665,86.7713',
'42.3400,83.0456', '33.7553,84.4006', '41.5061,81.6995', '39.0955,84.5161', '33.5276,112.2626', '39.9014,75.1675', '40.8135,74.0745', '37.4033,121.9694',
'44.5013,88.0622', '41.8623,87.6167', '39.0489,94.4839', '38.9077,76.8645', '35.2258,80.8530', '42.7738,78.7870',
'39.7601,86.1639', '40.4468,80.0158', '47.5951,122.3321', '27.9759,82.5033', '25.9583,80.2396', '29.6847,95.4107', '29.9511,90.0812',
'39.7439,105.0201', '32.7480,97.0934', '33.9535,118.3390', '33.9535,118.3390', '44.9736,93.2575'] 


// store date variable from datepicker
function getDate(dayIndex){
    var selectedDate = $("#datepicker").datepicker("getDate");
    console.log(dayjs(selectedDate).format("YYYY-MM-DD"))
    var date = dayjs(selectedDate).format("YYYY-MM-DD")
    getGameInfo(date);
    date = date.split("-").join("");
    today = today.split("-").join("");
    dayIndex = date - today;
    console.log(dayIndex)
    getWeather(dayIndex);

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
            throw new Exception("No Games Found")
        }

        const homeTeamID = data.response[0].teams.home.id
        const awayTeamID = data.response[0].teams.away.id
        TeamImg(homeTeamID, awayTeamID);   
    })

}; 

function TeamImg(homeTeamID, awayTeamID){;
     var homeImg = document.createElement("img");
     homeImg.src = 'https://media.api-sports.io/american-football/teams/' + homeTeamID + '.png';
     var homeSrc = document.getElementById("home-team-logo");
     homeSrc.appendChild(homeImg);

     var awayImg = document.createElement("img");
     awayImg.src = 'https://media.api-sports.io/american-football/teams/' + awayTeamID + '.png';
     var awaySrc = document.getElementById("away-team-logo");
     awaySrc.appendChild(awayImg)
 };
    
//Weather API function
//need function to fill var latLong


function getWeather() {
    var requestURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + latLong + "/" + date + "?key=WNRU679QQP5CDJZWL8EN8LWH9";

   fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
    });



