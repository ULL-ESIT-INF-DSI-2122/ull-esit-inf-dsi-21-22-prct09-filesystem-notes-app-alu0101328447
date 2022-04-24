import chalk from 'chalk';

import {readFile} from 'fs';

readFile('notes/Nota roja', (_, data) => {
  console.log(data.toString());
});