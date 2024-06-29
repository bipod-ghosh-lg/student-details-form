const axios = require("axios");

const options = {
  method: "GET",
  url: "https://geoapify-address-autocomplete.p.rapidapi.com/v1/geocode/autocomplete",
  params: {
    text: "Polizeigasse",
    type: "street",
    lang: "de",
    limit: "2",
    filter: "countrycode:de,es,fr",
    bias: "proximity:10.485306,48.852565",
  },
  headers: {
    "x-rapidapi-key": "0464ce0fefmsha662d5b6f9d9510p1818bfjsnfb6bce82a9c1",
    "x-rapidapi-host": "geoapify-address-autocomplete.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
