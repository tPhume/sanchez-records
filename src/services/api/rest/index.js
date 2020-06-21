const axios = require("axios").default;

function getData(api, page) {
  axios
    .get(api, { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });

  return { info: null, results: [] };
}

export default getData;
