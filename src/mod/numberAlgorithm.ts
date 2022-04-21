/**
 * Clase NumberAlgorithm
 */
export abstract class NumberAlgorithm {
  /**
   * 
   * @param numbers 
   */
  constructor(private numbers: Array <number>) {
    // Empty method
  }

  /**
   * Funcion run 
   * @param filter 
   * @param map 
   * @param reduce 
   */
  public run(filter: Function, map: Function, reduce: Function): void {
    let filNum: Array <number> = this.filter(filter);
    console.log(`El resultado del filtrado de numeros es: \n\t- ${filNum}`);

    let mapNum: Array <number> = this.map(map);
    console.log(`El resultado del mapeado de numeros es: \n\t- ${mapNum}`);

    let redNum: number = this.reduce(reduce);
    console.log(`El resultado de la reduccion de numeros es: ${redNum}`);
  }

  /**
   * Funcion que devuelve los numeros
   * @returns 
   */
  public getNumbers(): Array <number> {
    return this.numbers;
  }

  /**
   * Funcion de Filtrado por defecto
   * @param funct 
   * @returns 
   */
  public filter(funct: Function): Array <number> {
    let result: Array <number> = [];

    this.numbers.forEach(num => {
      if (funct(num)) {
        result.push(num);
      }
    });

    return result;
  }

  /**
   * Funcion de mapeado por defecto
   * @param funct 
   * @returns 
   */
  public map(funct: Function) {
    let result: Array <number> = [];

    this.numbers.forEach(num => {
        result.push(funct(num));
    });

    return result;
  }

  /**
   * Funcion de reduccion abstracta
   * @param reduceFunction 
   */
  protected abstract reduce(reduceFunction: Function): number;
}  