import yargs from 'yargs';
import {writeFile, existsSync, mkdirSync, unlinkSync, readdirSync ,readFile} from 'fs';
import {ColorText} from './colorText';
import chalk from 'chalk';

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
    if ((typeof argv.title === 'string') && (typeof argv.body === 'string') 
    && (typeof argv.color === 'string') && (typeof argv.user === 'string')) {
      // Direccion del archivo
      let dir: string = `./notes/${argv.user}/${argv.title}`;
      
      // Carpeta del usuario
      if (!existsSync(`./notes/${argv.user}`)) {
        mkdirSync(`./notes/${argv.user}`);
      }

      // Escritura del archivo
      // Si el archivo existe da error
      if (existsSync(dir)) {
        console.log(`ERROR: El archivo ${argv.title} ya existe`);
      } else {
        writeFile(dir, ColorText(argv.body, argv.color), () => {
          console.log(`File ${argv.title} has just been created`);
        });
      }
    }
  },
})
.command({
  command: 'mod',
  describe: 'Modify a note',
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
    if ((typeof argv.title === 'string') && (typeof argv.body === 'string') 
    && (typeof argv.color === 'string') && (typeof argv.user === 'string')) {
      // Direccion del archivo
      let dir: string = `./notes/${argv.user}/${argv.title}`;

      // Escritura del archivo
      // Si el archivo existe da error
      if (existsSync(dir)) {
        writeFile(dir, ColorText(argv.body, argv.color), () => {
          console.log(`File ${argv.title} has just been modified`);
        });
      } else {
        console.log(`ERROR: El archivo ${argv.title} no existe`);
      }
    }
  }
})
.command({
  command: 'delete',
  describe: 'Delete a note',
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
  },
  handler(argv) {
    if ((typeof argv.title === 'string') && (typeof argv.user === 'string')) {
      // Direccion del archivo
      let dir: string = `./notes/${argv.user}/${argv.title}`;

      // Escritura del archivo
      // Si el archivo existe da error
      if (existsSync(dir)) {
        unlinkSync(dir)
        console.log(`File ${argv.title} has just been deleted`);
      } else {
        console.log(`ERROR: El archivo ${argv.title} no existe`);
      }
    }
  }
})
.command({
  command: 'list',
  describe: 'List users notes',
  builder: {
    user: {
      describe: 'Owner user',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      // Direccion del archivo
      let dir: string = `./notes/${argv.user}/`;
      let printableTitles: string[] = [];

      // Escritura del archivo
      // Si el archivo existe da error
      if (existsSync(dir)) {
        let dirs = readdirSync(dir);
        dirs.forEach(title => {
          let direction = dir + title;
          readFile(direction, (err, data) => {
            if (err) {
              console.log('There must be a problem with the file you are trying to read');
            } else {
              if (chalk.blue(chalk.reset(data.toString())) === data.toString()) { 
                // Azul
                printableTitles.push(chalk.blue(argv.title));
              } else if (chalk.red(chalk.reset(data.toString())) === data.toString()) {
                // Rojo
                printableTitles.push(chalk.red(argv.title));
              } else if (chalk.green(chalk.reset(data.toString())) === data.toString()) {
                // Verde
                printableTitles.push(chalk.green(argv.title));
              } else if (chalk.yellow(chalk.reset(data.toString())) === data.toString()) {
                // Amarillo
                printableTitles.push(chalk.yellow(argv.title));
              } else {
                // Error
                printableTitles.push(chalk.reset(argv.title));
              }
            }
          });
        });

        
        if (printableTitles.length === 0) {
          console.log(`El usuario ${argv.user} no tiene ninguna nota`);
        } else {
          printableTitles.forEach(title => { 
            console.log(`${title}`);
          });
        }


      } else {
        console.log(`ERROR: El usuario ${argv.user} no existe`);
      }
    }
  }
});

yargs.parse();

console.log("Exe 2");