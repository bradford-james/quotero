import ora from 'ora';
import chalk from 'chalk';
import getQuote from '../utils/getQuote';

const quote = async () => {
  const spinner = ora().start();

  try {
    const randomQuote = await getQuote();
    spinner.stop();

    const consoleOutput = chalk.blue(`
      ${randomQuote.quote}

      -${chalk.cyan(randomQuote.author)}
    `);

    console.log(consoleOutput);
  } catch (err) {
    spinner.stop();

    console.error(err);
    process.exit(1);
  }
};

export default quote;
