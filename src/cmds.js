const ora = require('ora')
const chalk = require('chalk')
const { getQuote } = require('../src/getQuote')
const { version } = require('../package.json')

const helpLog = `
  quoter [command] <options>

    <default - no option> ..... will return quote/author pair
    version ................... show package version
    help ...................... show help menu
    `

const cliFormatQuote = quoteObj =>
  chalk.blue(`
${quoteObj.quote}

    -${chalk.cyan(quoteObj.author)}
  `)

exports.display = {
  help: () => console.log(helpLog),
  version: () => console.log(`v${version}`),
  error: args => console.log(`${args.join(' ')} is not a valid command`),
}

exports.quote = async () => {
  const spinner = ora().start()

  try {
    const randomQuote = await getQuote()
    spinner.stop()
    console.log(cliFormatQuote(randomQuote))
  } catch (err) {
    spinner.stop()
    console.error(err)
    process.exit(1)
  }
}
