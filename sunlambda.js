const fetch = require("node-fetch");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function handler() {
  async function sun() {
    let lines = [];
    let res = await fetch(
      "http://api.sunrise-sunset.org/json?lat=60.169332656&lng=24.823163374&date=today"
    );
    let data = await res.json();
    lines.push(data.results.sunrise);
    lines.push(data.results.sunset);
    //toBucket(lines);
    console.log(lines);
    return lines;
  }

  async function toBucket(lines) {
    try {
      const params = {
        Bucket: "megadashbucket",
        Key: "sun.json",
        Body: JSON.stringify(lines),
        ContentType: "application/json; charset=utf-8",
      };
      await s3.putObject(params).promise();
    } catch (err) {
      console.log(err);
    }
  }

  try {
    const dataSun = await sun();
    return dataSun;
  } catch (err) {
    return { error: err };
  }
}

handler();
