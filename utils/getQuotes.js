const axios = require("axios");

module.exports = async category => {
  const results = await axios.get("https://quotes.rest/qod");

  return `${results.data.contents.quotes[0].quote}
      -${results.data.contents.quotes[0].author}`;
};
