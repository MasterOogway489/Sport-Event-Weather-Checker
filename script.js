
// AMERICAN-FOOTBALL-API

// api keys:  
// 'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
// 'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
var teamIdEl = document.getElementById("search-input");
var formEl = document.getElementById("search-form");
var teamID = ["Skip", "Las Vegas Raiders", "Jacksonville Jaguars", "New England Patriots", "New York Giants", "Baltimore Ravens", "Tennessee Titans", "Detroit Lions",
"Atlanta Falcons", "Cleveland Browns", "Cincinnati Bengals", "Arizona Cardinals", "Philidelphia Eagles", "New York Jets", "San Francisco 49ers",
"Green Bay Packers", "Chicago Bears", "Kansas City Cheifs", "Washington Commanders", "Carolina Panthers", "Buffalo Bills",
"Indianapolis Colts", "Pittsburgh Steelers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Miami Dolphins", "Huston Texans", "New Orleans Saints",
"Denver Broncos", "Dallas Cowboys", "Los Angeles Chargers", "Las Angeles Rams", "Minnesota Vikings"];

function submitForm(event) {
    event.preventDefault();
    
    getTeamID(teamIdEl.value, teamID);
}

function getTeamID(teamName, teamID) {
    var teamIndex = teamID.indexOf(teamName);
    getGameInfo(teamIndex);
    
}

function getGameInfo(teamIndex) {
    var requestUrl = `https://v1.american-football.api-sports.io/games?team=${teamIndex}`;
    fetch(requestUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.american-football.api-sports.io",
            "x-rapidapi-key": "e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

//access games api sample
function gameID(teamName){    
    var parameter = ["date", "id", "team"]
    var paramID = function() {
        if (parameter = "date"){
            dayjs("YYYY-MM-DD")
        } else if (parameter = "id"){
            // return 4 digit game id
        } else { //"team"
            //return 3 digit team id (I do not know where to find either of these)
        }
    }
    fetch("https://v1.american-football.api-sports.io/games?" + parameter + "=" + paramID, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.american-football.api-sports.io",
            "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    }); 
}

// function getTeamID(){


//         // Get games from one game {id}
//         get("https://v1.american-football.api-sports.io/games?id=4550");

//         // Get all available games from one {league} & {season}
        // get("https://v1.american-football.api-sports.io/games?league=1&season=2022");

//         // Get all available games from one {team} & {season}
        // get("https://v1.american-football.api-sports.io/games?team=367&season=2022");

//         // Get all available games from one {date}
//         get("https://v1.american-football.api-sports.io/games?date=2022-09-30");

// }
//access team ID's
fetch("https://v1.american-football.api-sports.io/teams?id=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1.american-football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

//access logos from the api using 
const url = 'https://api-american-football.p.rapidapi.com/teams?id=' + teamID;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
		'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//Array of team ID's: index number === id number

// NEW YORK JETS DOES NOT HAVE A LOGO FOR SOME REASON
// Each index element of cityWeather corresponds to the same index of teamID's home stadium
var cityWeather = ['Skip', '36.0909,115.1833', '30.3239,81.6373', '42.0909,71.2643', '40.8135,74.0745', "39.2780,76.6227", '36.1665,86.7713',
'42.3400,83.0456', '33.7553,84.4006', '41.5061,81.6995', '39.0955,84.5161', '33.5276,112.2626', '39.9014,75.1675', '40.8135,74.0745', '37.4033,121.9694',
'44.5013,88.0622', '41.8623,87.6167', '39.0489,94.4839', '38.9077,76.8645', '35.2258,80.8530', '42.7738,78.7870',
'39.7601,86.1639', '40.4468,80.0158', '47.5951,122.3321', '27.9759,82.5033', '25.9583,80.2396', '29.6847,95.4107', '29.9511,90.0812',
'39.7439,105.0201', '32.7480,97.0934', '33.9535,118.3390', '33.9535,118.3390', '44.9736,93.2575'] 
    




//Weather API function
//need function to fill var latLong
var latLong = ""

function getWeather() {
   var requestURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + latLong + "?key=WNRU679QQP5CDJZWL8EN8LWH9";

   fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Weather: Raw data\n----------')
        console.log(data);
    });

}

console.log(window)
console.log(window.document)
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
  console.log(dropdown)
//   console.log(dropdown.dropdown-content)
//   console.log(dropdown-item)
});