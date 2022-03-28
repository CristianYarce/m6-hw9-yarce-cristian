const key = "bd07a53215f7913608d044624d747cda";

const input = document.querySelector(".input"); 
var button = document.querySelector("button");
const weather = document.querySelector(".weather"); 

button.onclick = function() {
    const userInput = input.value;
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&APPID=${key}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        city(response)
    })
  }
  function city(city) {
    console.log(city);
    input.value = "";
    weather.innerHTML = `<br>${city.name}, ${city.sys.country}<br><img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png"></img><br>${city.weather[0].description}<br><br>Current: ${city.main.temp}° F<br>Feels like: ${city.main.feels_like}° F`;
}