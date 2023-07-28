
// AMERICAN-FOOTBALL-API

// api keys:  
// 'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
// 'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'



//access games api sample
function gameID(){    
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
        // Get games from one game {id}
        get("https://v1.american-football.api-sports.io/games?id=4550");

        // Get all available games from one {league} & {season}
        get("https://v1.american-football.api-sports.io/games?league=1&season=2022");

        // Get all available games from one {team} & {season}
        get("https://v1.american-football.api-sports.io/games?team=367&season=2022");

        // Get all available games from one {date}
        get("https://v1.american-football.api-sports.io/games?date=2022-09-30");


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

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

//Array of team ID's: index number === id number
var teamID = ["Skip", "Las Vegas Raiders", "Jacksonville Jaguars", "New England Patriots", "New York Giants", "Baltimore Ravens", "Tennessee Titans", "Detroit Lions",
"Atlanta Falcons", "Cleveland Browns", "Cincinnati Bengals", "Arizona Cardinals", "Philidelphia Eagles", "New York Jets", "San Francisco 49ers",
"Green Bay Packers", "Chicago Bears", "Kansas City Cheifs", "Washington Commanders", "Carolina Panthers", "Buffalo Bills",
"Indianapolis Colts", "Pittsburgh Steelers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Miami Dolphins", "Huston Texans", "New Orleans Saints",
"Denver Broncos", "Dallas Cowboys", "Los Angeles Chargers", "Las Angeles Rams", "Minnesota Vikings"];
// NEW YORK JETS DOES NOT HAVE A LOGO FOR SOME REASON
 
console.log(teamID[32])

//Weather API function

var saltLakeCityURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/40.7608,-111.8911/next14days?unitGroup=us&key=WNRU679QQP5CDJZWL8EN8LWH9"

fetch(saltLakeCityURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Salt Lake City: Raw data\n----------')
        console.log(data);
    });

