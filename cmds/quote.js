const ora = require("ora");
const getQuote = require("../utils/getQuotes");

module.exports = async args => {
  const spinner = ora().start();

  try {
    const randomQuote = await getQuote();
    spinner.stop();

    const consoleOutput = `
      ${randomQuote.quote}

      -${randomQuote.author}
    `;

    console.log(consoleOutput);
  } catch (err) {
    spinner.stop();

    require("../utils/error")(err, true);
  }
};
