function displayTemperature(response) {
  console.log(response);
  console.log(response.data.main.temp);
  console.log(response.data.name);
  console.log(response.data.weather[0].description);
  console.log(response.data.main.humidity);
  console.log(response.data.wind.speed);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let temperatureElement = document.querySelector("#temperature");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let ApiKey = "d1a86552de255334f6117b348c4519bd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= New York&units=metric&appid=${ApiKey}`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
