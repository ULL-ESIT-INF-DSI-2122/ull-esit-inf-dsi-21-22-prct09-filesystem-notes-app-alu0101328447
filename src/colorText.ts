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


export function getTextColor(text: string): string {
  
  if (chalk.blue(text) == text) { 
    // Azul
    return "blue";
  } else if (chalk.red(text) == text) {
    // Rojo
    return "red";
  } else if (chalk.green(text) == text) {
    // Verde
    return "green";
  } else if (chalk.yellow(text)  == text) {
    // Amarillo
    return "yellow";
  }
  return '';
}
