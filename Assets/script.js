$(document).ready(function () {
    const myApiKey = '2c6bf35b79f11e55f6ca64bbb24dbb3e'

$('#searchBtn').click(function () {
        let userInput = $('#city').val();
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${myApiKey}`;
//Call current weather ajax
        $.ajax({
            url: queryURL,
            type: 'GET',

        }).then(function (response) {
            console.log(response);
            response.name;
            response.main.temp;
            response.main.humidity;
            response.wind.speed;
            $('#cityName').text(
              response.name + ' (' + new Date().toLocaleDateString() + ')'
            );
            $('#cityName').append(
              `<img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png">`
            );
            $('#currentTemp')
              .text(`Temperature: ${response.main.temp}` + 'º F')
              .addClass('currentWeather');
            $('#humidity')
              .text(`Humidity: ${response.main.humidity}` + '%')
              .addClass('currentWeather');
            $('#windSpeed')
              .text(`Windspeed: ${response.wind.speed}` + 'mph')
              .addClass('currentWeather');
            getForcast(userInput);
        });
    });    
});