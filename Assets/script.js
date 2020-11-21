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
            for (let i = 0; i < response.list.length; i++) {
                let hour = response.list[i];
                if (hour.dt_txt.indexOf('00:00:00') != -1) {
                    let date = new Date(hour.dt_txt).toLocaleDateString();
                     hour.main.temp;
                    hour.main.humidity;
                    let DIV = $('<span>');
                    let image = $('<img>');
                    image.attr(
                      'src',
                        `http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`
                    );
                    DIV.addClass('divClasses');
                    DIV.append(`<h3>${date}</h3>`);
                    DIV.append(image);
                    DIV.append(
                     `<p>Temperture <br>  ${
                        hour.main.temp + 'º F'
                      } </p><p>Humidity <br> ${hour.main.humidity + '%'}</p>`
                    );
                    $('#fiveDayForecast').append(DIV);
                }
            }
        });
    })    
})