import yargs from 'yargs';
import {writeFile, existsSync, mkdirSync, unlinkSync, readdirSync ,readFile} from 'fs';
import {ColorText, getTextColor} from './colorText';
import chalk from 'chalk';


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
      
      // Escritura del archivo
      // Si el archivo existe da error
      if (existsSync(dir)) {
        let dirs = readdirSync(dir);
        if (dirs.length > 0) {
          dirs.forEach(title => {
            let direction = dir + title;
            readFile(direction, (err, data) => {
              if (err) {
                console.log('There must be a problem with the file you are trying to read');
              } else {
                switch(getTextColor(data.toString())) {
                  case "blue": 
                    console.log(chalk.blue(title));
                    break;

                  case "red": 
                    console.log(chalk.red(title));
                    break;

                  case "green": 
                    console.log(chalk.green(title));
                    break;

                  case "yellow": 
                    console.log(chalk.yellow(title));
                    break;

                  default: 
                    console.log(title);
                    break;
                }
              }
            });
          });
        } else {
          console.log(`El usuario ${argv.user} no tiene ninguna nota`);
        }

      } else {
        console.log(`ERROR: El usuario ${argv.user} no existe`);
      }
    }
  }
})
.command({
  command: 'read',
  describe: 'Read a note',
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
        readFile(dir, (err, data) => {
          if (err) {
            console.log('There must be a problem with the file you are trying to read');
          } else {
            // Imprimo el titulo
            switch(getTextColor(data.toString())) {
              case "blue": 
                console.log(chalk.blue(argv.title));
                break;

              case "red": 
                console.log(chalk.red(argv.title));
                break;

              case "green": 
                console.log(chalk.green(argv.title));
                break;

              case "yellow": 
                console.log(chalk.yellow(argv.title));
                break;

              default: 
                console.log(argv.title);
                break;
            }

            // Datos
            console.log(data.toString());
          }
        });
      }
    }
  }
})

yargs.parse();
