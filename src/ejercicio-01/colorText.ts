import chalk from 'chalk';

/**
 * Possible Colors
 * black
 * red
 * green
 * yellow
 * blue
 * magenta
 * cyan
 * white
 */
export function ColorText(text: string, color: string): string {
  switch(color) {
    case 'black': 
      return  chalk.black(text);
      break;

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
      
    case 'magenta': 
      return  chalk.magenta(text);
      break;
      
    case 'cyan': 
      return  chalk.cyan(text);
      break;
      
    case 'white': 
      return  chalk.white(text);
      break;

    default: 
      return text;
      break;
  }

  return '';
}