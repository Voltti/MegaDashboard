import fetch from "node-fetch";

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const response = await fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=60.205491&longitude=	24.655900&current_weather=true&timezone=EET"
);

const data = await response.json();
const temperature = data.current_weather.temperature;
const windspeed = data.current_weather.windspeed;
console.log(`Current Temperature: ${temperature}`);
console.log(`Wind Speed: ${windspeed}`);
