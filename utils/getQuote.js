import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import path from 'path';

// Set lowdb
const writeDirectory = __dirname;
const writeFileURL = path.resolve(writeDirectory, '../lib/db.json');
const adapter = new FileSync(writeFileURL);
const db = low(adapter);

const getQuote = async () => {
  let quotes = '';
  const randomNum = Math.floor(Math.random() * 1000);

  try {
    quotes = await db.get('quotes').value();
  } catch (err) {
    console.log(err);
  }

  return {
    quote: quotes[randomNum].quote,
    author: quotes[randomNum].author,
  };
};

export default getQuote;
