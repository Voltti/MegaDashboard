import "dotenv/config";
import fetch from "node-fetch";
global.fetch = fetch;
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: dq1gfuvj9MDQcJV4WZc748Vgm - rkth8eCaba0owmzc0,
});

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
