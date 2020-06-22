const axios = require("axios").default;

function getData(api, page) {
  return axios.get(api, { params: { page } });
}

export default getData;
