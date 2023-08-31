let today = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[today.getDay()];

let date = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();

let h3 = document.querySelector("h3");
h3.innerHTML = `${day} ${date} ${hours}:${minutes} pm`;

// temperature

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = 86;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = 30;
}

let convert = document.querySelector("#convert");
convert.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  var city = (document.querySelector("#city").innerHTML = response.data.name);
  var descrip = (document.querySelector("#description").innerHTML =
    response.data.weather[0].main);
  var temp = (document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  ));
  var humidity = (document.querySelector("#humidity").innerHTML =
    response.data.main.humidity);
  var wind = (document.querySelector("#windy").innerHTML = Math.round(
    response.data.wind.speed
  ));
}

function searchCity(city) {
  let apiKey = "139004ab287c65e0334c48f44c5d1413";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${apiKey}&q=${city}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function submitval(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#city-name");
searchForm.addEventListener("submit", submitval);

searchCity("Paris");
