import minimist from 'minimist';
import quote from './cmds/quote';
import version from './cmds/version';
import help from './cmds/help';

const cli = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || 'quote';

  if (args.version || args.v) {
    cmd = 'version';
  } else if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'quote':
      quote(args);
      break;
    case 'version':
      version(args);
      break;
    case 'help':
      help(args);
      break;
    default:
      console.error(`${cmd} is not a valid command`);
      process.exit(1);
  }
};

export default cli();
