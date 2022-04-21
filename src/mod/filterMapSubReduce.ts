import { NumberAlgorithm } from "./numberAlgorithm";

/**
 * Clase FilterMapSubReduce hija de NumberAlgorithm
 */
export class FilterMapSubReduce extends NumberAlgorithm {
  /**
   * 
   * @param numbers -> conjunto de numeros
   */
  constructor(numbers: Array<number>) {
    super(numbers);
  }

  /**
   * Funcion de Reduccion
   * @param reduceFunction 
   * @returns 
   */
  public reduce(reduceFunction: Function): number {
    let result: number = 0;
    
    for (let i = 0; i < this.getNumbers().length; i++) {
      result = reduceFunction(-result, this.getNumbers()[i]);
    }

    return result;
  }
}