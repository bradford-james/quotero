const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

const writeDirectory = __dirname;
const writeFileURL = path.resolve(writeDirectory, "../db.json");
const adapter = new FileSync(writeFileURL);
const db = low(adapter);

module.exports = async category => {
  const quotes = db.get("quotes").value();
  const randomNum = Math.floor(Math.random() * 10);

  return {
    quote: quotes[randomNum].quote,
    author: quotes[randomNum].author
  };
};