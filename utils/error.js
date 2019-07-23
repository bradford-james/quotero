module.exports = (message, exit) => {
  console.error(message.response.data);
  exit && process.exit(1);
};
