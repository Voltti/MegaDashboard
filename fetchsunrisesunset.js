/*
const fetch = require("node-fetch");

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const response = fetch(
  "http://api.sunrise-sunset.org/json?lat=60.169332656&lng=24.823163374&date=today"
);

const data = response.json();
const sunrise = data.results.sunrise;
const sunset = data.results.sunset;
const solar_noon = data.results.solar_noon;

console.log(`Sunrise: ${sunrise}`);
console.log(`Sunset: ${sunset}`);
console.log(`Solar Noon: ${solar_noon}`);
*/

const fetch = require("node-fetch");

async function getSun() {
  try {
    const response = await fetch(
      "http://api.sunrise-sunset.org/json?lat=60.169332656&lng=24.823163374&date=today"
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;

    console.log(`Sunrise: ${sunrise}`);
    console.log(`Sunset: ${sunset}`);
  } catch (err) {
    console.log(err);
  }
}

getSun();
