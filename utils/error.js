module.exports = (message, exit) => {
  console.error(message.data);
  exit && process.exit(1);
};
