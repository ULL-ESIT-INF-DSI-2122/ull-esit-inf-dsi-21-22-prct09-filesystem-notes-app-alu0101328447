# DESARROLLO DE SISTEMAS INFORMÁTICOS
## Informe de la Práctica 9: Aplicación de procesamiento de notas de textoTarea

### José Pablo Ruiz Galván 

### Práctica 9

Esta practica esta enfocada al trabajo con los paquetes yargs y chalk. Ademas de aprender sobre el sistema de ficheros en Typescript.

Para el desarrollo de esta practica se pide el desarrollo de una aplicacion que permita tomar notas de los usuarios y a su vez, permita la modificacion, lectura y eliminacion de estas, ademas de poder listar todas las notas de un usuario. 

La opcion que permite añadir una nueva nota comprueba los tipos de datos, y luego introduce el texto del color requerido en el archivo. En caso de que ya existiese el archivo, se emite un error. 


```
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
        console.log(chalk.red(`ERROR: El archivo ${argv.title} ya existe`));
      } else {
        writeFile(dir, ColorText(argv.body, argv.color), () => {
          console.log(`File ${argv.title} has just been created`);
        });
      }
    }
  },
})
```

En el caso de la opcion de modicicacion, se comprueba que ya exista el archivo, si no, se emite un error. Tras esto, se reemplaza el contenido del archivo por el nuevo contenido con el color pertinente.

```
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
          console.log(chalk.green(`File ${argv.title} has just been modified`));
        });
      } else {
        console.log(chalk.red(`ERROR: El archivo ${argv.title} no existe`));
      }
    }
  }
})
```

Para la funcion de eliminacion de una nota, se pide el usuario y el titulo de la nota, en caso de que no exista se muestra un error, y en caso de que si, se elimina.

```
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
        console.log(chalk.green(`File ${argv.title} has just been deleted`));
      } else {
        console.log(chalk.red(`ERROR: El archivo ${argv.title} no existe`));
      }
    }
  }
})
```

Por otra parte, la funcion que lista el contenido, entra en el fichero en caso de que exista, ya que si no existe, se emite un error, y comprueba el color del texto. De esta manera, se imprime el color adecuado.

```
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
          console.log(chalk.green(`El usuario ${argv.user} no tiene ninguna nota`));
        }

      } else {
        console.log(chalk.red(`ERROR: El usuario ${argv.user} no existe`));
      }
    }
  }
})
```

De un modo similar al listado de notas de un usuario, se comprueba la existencia del archivo y luego se procede a comprobar el color del texto para imprimir adecuadamente el resultado.

```
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
```
