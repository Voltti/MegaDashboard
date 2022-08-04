import fetch from "node-fetch";
global.fetch = fetch;
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "ACCESS KEY HERE",
});

unsplash.photos
  .getRandom({ query: "espoo", orientation: "landscape" })
  .then((result) => {
    if (result.errors) {
      // handle error here
      console.log("error occurred: ", result.errors[0]);
    } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
    }
  });
