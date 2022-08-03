import "dotenv/config";
import fetch from "node-fetch";
global.fetch = fetch;
import { createApi } from "unsplash-js";

const unsplash = createApi({ accessKey: process.env.API_ACCESS_KEY });

unsplash.photos.getRandom({}).then((result) => {
  if (result.errors) {
    // handle error here
    console.log("error occurred: ", result.errors[0]);
  } else {
    // handle success here
    const photo = result.response;
    console.log(photo);
  }
});
