import chalk from 'chalk';

/**
 * Possible Colors
 * red
 * green
 * yellow
 * blue
 */
export function ColorText(text: string, color: string): string {
  switch(color) {

    case 'red': 
      return  chalk.red(text);
      break;

    case 'green': 
      return  chalk.green(text);
      break;

    case 'yellow': 
      return  chalk.yellow(text);
      break;
      
    case 'blue': 
      return  chalk.blue(text);
      break;

    default: 
      return text;
      break;
  }

  return '';
}