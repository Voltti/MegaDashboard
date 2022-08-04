const fetch = require("node-fetch");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function handler() {
  async function weather() {
    let lines = [];
    let res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=60.169332656&longitude=24.823163374&current_weather=true&timezone=EET"
    );
    let data = await res.json();
    lines.push(data.current_weather.temperature);
    lines.push(data.current_weather.windspeed);
    // toBucket(lines);
    console.log(lines);
    return lines;
  }

  async function toBucket(lines) {
    try {
      const params = {
        Bucket: "megadashbucket",
        Key: "weather.json",
        Body: JSON.stringify(lines),
        ContentType: "application/json; charset=utf-8",
      };
      await s3.putObject(params).promise();
    } catch (err) {
      console.log(err);
    }
  }

  try {
    const dataWeather = await weather();
    return dataWeather;
  } catch (err) {
    return { error: err };
  }
}

handler();
