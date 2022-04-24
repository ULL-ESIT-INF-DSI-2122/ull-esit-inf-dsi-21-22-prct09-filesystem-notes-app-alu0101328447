import yargs from 'yargs';
import {writeFile} from 'fs';
import {ColorText} from 'colorText'

console.log("Exe 1");

// Add - read - list - remove
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Owner user',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note text',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color text',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string') {
      let dir: string = './notes/' + argv.title;
      writeFile(dir, chalk.red('Hello World!'), () => {
        console.log(`File ${argv.title} has just been created`);
      });
    }
  },
});

yargs.parse();

console.log("Exe 2");