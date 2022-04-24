import 'mocha';
import {expect} from 'chai';
import { ColorText, getTextColor } from '../src/colorText';
import chalk from 'chalk';


describe('Ejercicio-01: colorTest functions test', () => {
  it('Se pueden obtener un texto del color seleccionado', () => {
    let text: string = "Hola mundo";
    let resultText: string = chalk.red("Hola mundo");
    let text2 = chalk.blue(resultText);
    text2 = chalk.reset(text2);

    console.log("W");
    for (let i = 0; i < text2.length; i++) {
      let abc: string = 'abcdefghijklmnñopqrstuvwxyz'
      if (text2.indexOf(abc) != -1)
        console.log(text2[i]);
    }

    expect(ColorText(text2, "red")).to.be.equal(resultText);
    expect(ColorText(text, "red")).to.be.equal(resultText);
    expect(ColorText(text, "blue")).to.not.be.equal(resultText);
  });
  it('Se pueden obtener el color de un texto', () => {
    let blueText: string = chalk.blue("Hola mundo");
    let redText: string = chalk.red("Hola mundo");
    
    expect(getTextColor(blueText)).to.be.equal("blue");
    expect(getTextColor(blueText)).to.not.be.equal("red");
    expect(getTextColor(redText)).to.be.equal("red");
    expect(getTextColor(redText)).to.not.be.equal("blue");
  });
})