/* eslint-disable no-unused-vars */
function doRequest() {
    const city = document.getElementById("cityField").value;
    const url =
        `https://api.weatherapi.com/v1/current.json?key=f44ceda5450e4c16be585450200805&q=${city}`;

    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.error) {
            if (data.error.code == "1002") {
                alert("The API key has not been provided. Create an issue on the GitHub repo.");
                console.error("No API key provided.");
            }
            if (data.error.code == "1003") {
                alert("You need to enter a location.");
                console.error("The q parameter is missing. (No location provided.)");
            }
            if (data.error.code == "1005") {
                alert("The API request URL is invalid. Create an issue on the GitHub repo.");
                console.error("Invalid API request URL.");
            }
            if (data.error.code == "1006") {
                alert("No matching location found.");
                console.error("No matching location found.");
            }
            if (data.error.code == "2006") {
                alert("Invalid API key. Create an issue on the GitHub repo.");
                console.error("Invalid API key.");
            }
            if (data.error.code == "2007") {
                alert("API key has exceeded monthly quota.");
                console.error("API key quota exceeded.");
            }
            if (data.error.code == "2008") {
                alert("API key has been disabled.");
                console.error("API key disabled.");
            }
            if (data.error.code == "9999") {
                alert("Internal application error.");
                console.error("Internal application error.");
            }
        } else {
            // Log the object
            console.log(data);

            // Basic location data
            let name = document.getElementById("name");
            let region = document.getElementById("region");
            let country = document.getElementById("country");
            name.innerHTML = data.location.name;
            region.innerHTML = data.location.region;
            country.innerHTML = data.location.country;

            // Weather data
            let temperature = document.getElementById("temperature");
            let condition = document.getElementById("condition");
            let pressure = document.getElementById("pressure");
            let humidity = document.getElementById("humidity");
            let wind = document.getElementById("wind");
            let time = document.getElementById("time");
            temperature.innerHTML = "Temperature: " + data.current.temp_c + "°C";
            condition.innerHTML = "Condition: " + data.current.condition.text;
            pressure.innerHTML = "Pressure: " + data.current.pressure_mb + " mBar";
            humidity.innerHTML = "Humidity: " + data.current.humidity + "%";
            wind.innerHTML = "Wind speed: " + data.current.wind_kph + " km/h";
            time.innerHTML = "Local Time: " + data.location.localtime;

            // Misc
            document.getElementById("image").innerHTML = "<img id=\"weatherImage\">"
            let image = document.getElementById("weatherImage");
            image.src = "https:" + data.current.condition.icon;
        }
    }).catch((err) => {
        console.error(err, "error");
    });
}