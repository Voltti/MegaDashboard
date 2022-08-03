import fetch from "node-fetch";

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const response = await fetch(
  "http://api.sunrise-sunset.org/json?lat=60.169332656&lng=24.823163374&date=today"
);

const data = await response.json();
const sunrise = data.results.sunrise;
const sunset = data.results.sunset;
const solar_noon = data.results.solar_noon;

console.log(sunrise);
console.log(sunset);
console.log(solar_noon);
