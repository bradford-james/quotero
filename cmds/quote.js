const ora = require("ora");
const getQuote = require("../utils/getQuotes");

module.exports = async args => {
  const spinner = ora().start();

  try {
    const quote = await getQuote();

    spinner.stop();

    console.log(quote);
  } catch (err) {
    spinner.stop();

    console.log(err.response.data.error.message);
  }
};
