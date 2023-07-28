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