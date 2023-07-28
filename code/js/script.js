// api keys:  
// 'X-RapidAPI-Key': 'e51f2cac63mshd60e8397482df2cp17863djsn20263e9969af',
// 'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'



//access sport games api sample
    fetch("https://v1.american-football.api-sports.io/games?date=2022-09-30", {
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

// Get games from one game {id}
get("https://v1.american-football.api-sports.io/games?id=4550");

// Get all available games from one {league} & {season}
get("https://v1.american-football.api-sports.io/games?league=1&season=2022");

// Get all available games from one {team} & {season}
get("https://v1.american-football.api-sports.io/games?team=367&season=2022");

// Get all available games from one {date}
get("https://v1.american-football.api-sports.io/games?date=2022-09-30");

//access logos from the api
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
    myHeaders.append("x-rapidapi-host", "v1.american-football.api-sports.io");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://v1.american-football.api-sports.io/{endpoint}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));