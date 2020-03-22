const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

const DB_PATH = '../src/db.json'

const writeFileURL = path.resolve(__dirname, DB_PATH)
const adapter = new FileSync(writeFileURL)
const db = low(adapter)

exports.getQuote = async () => {
  let quotes = ''
  const randomNum = Math.floor(Math.random() * 1000)

  try {
    quotes = await db.get('quotes').value()
  } catch (err) {
    console.log(err)
  }

  return {
    quote: quotes[randomNum].quote,
    author: quotes[randomNum].author,
  }
}
