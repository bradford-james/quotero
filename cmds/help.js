const menus = {
  main: `
  quoter [command] <options>

    <default - no option> ..... will return quote
    version ................... show package version
    help ...................... show help menu for a command
    `
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
