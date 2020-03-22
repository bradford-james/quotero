const minimist = require('minimist')
const { quote, display } = require('./src/cmds')
const { getQuote } = require('./src/getQuote')

exports.cli = () => {
  const args = minimist(process.argv.slice(2))

  let cmd
  if (!args._[0]) cmd = 'quote'
  if (args.version || args.v) cmd = 'version'
  if (args.help || args.h) cmd = 'help'

  switch (cmd) {
    case 'quote':
      quote()
      break
    case 'version':
      display.version()
      break
    case 'help':
      display.help()
      break
    default:
      display.error(args)
      process.exit(1)
  }
}

exports.pckg = async () => {
  const randomQuoteObj = await getQuote()
  randomQuoteObj.quote = randomQuoteObj.quote.replace(/\n/g, ' ')
  return randomQuoteObj
}
