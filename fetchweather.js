const fetch = require("node-fetch");

async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=60.205491&longitude=24.655900&current_weather=true&timezone=EET"
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    const temperature = data.current_weather.temperature;
    const windspeed = data.current_weather.windspeed;

    //console.log(data);
    console.log(`Current Temperature: ${temperature}`);
    console.log(`Wind Speed: ${windspeed}`);
  } catch (err) {
    console.log(err);
  }
}

getWeather();
