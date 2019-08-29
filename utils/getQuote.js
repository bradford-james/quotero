const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

// Set lowdb
const writeDirectory = __dirname;
const writeFileURL = path.resolve(writeDirectory, "../lib/db.json");
const adapter = new FileSync(writeFileURL);
const db = low(adapter);

module.exports = async () => {
  try {
    const quotes = await db.get("quotes").value();
    const randomNum = Math.floor(Math.random() * 1000);

    return {
      quote: quotes[randomNum].quote,
      author: quotes[randomNum].author
    };
  } catch (err) {
    console.log(err);
  }
};