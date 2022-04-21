import 'mocha';
import {expect} from 'chai';
import { FilterMapAddReduce } from "../../src/mod/filterMapAddReduce";

describe('Modificacion: clase FilterMapAddReduce Test', () => {
  it('Se puede obtener el conjunto de numeros', () => {
    let numbers1: Array <number> = [0, 1, 2, 3];
    let filter1: FilterMapAddReduce = new FilterMapAddReduce(numbers1);

    let numbers2: Array <number> = [2, 66, 88, 99, 33, 456];
    let filter2: FilterMapAddReduce = new FilterMapAddReduce(numbers2);

    expect(filter1.getNumbers()).to.be.eql(numbers1);
    expect(filter2.getNumbers()).to.be.eql(numbers2);
  });
  it('Se puede filtrar los numeros del array', () => {
    let numbers1: Array <number> = [0, 1, 2, 3];
    let filter1: FilterMapAddReduce = new FilterMapAddReduce(numbers1);

    let numbers2: Array <number> = [2, 66, 88, 99, 33, 456];
    let filter2: FilterMapAddReduce = new FilterMapAddReduce(numbers2);


    let filter: Function = function(a) {return a < 3;};

    expect(filter1.filter(filter)).to.be.eql([0, 1, 2]);
    expect(filter2.filter(filter)).to.be.eql([2]);
  });
  it('Se pueden transformar los valores del conjunto de numeros', () => {
    let numbers1: Array <number> = [0, 1, 2, 3];
    let filter1: FilterMapAddReduce = new FilterMapAddReduce(numbers1);

    let numbers2: Array <number> = [2, 66, 88, 99, 33, 456];
    let filter2: FilterMapAddReduce = new FilterMapAddReduce(numbers2);


    let maping: Function = function(a) {return a * 2;};

    expect(filter1.map(maping)).to.be.eql([0, 2, 4, 6]);
    expect(filter2.map(maping)).to.be.eql([4, 132, 176, 198, 66, 912]);
  });

  it('Se pueden reducir los valores del conjunto de numeros a un solo numero', () => {
    let numbers1: Array <number> = [0, 1, 2, 3];
    let filter1: FilterMapAddReduce = new FilterMapAddReduce(numbers1);

    let numbers2: Array <number> = [2, 66, 88, 99, 33, 456];
    let filter2: FilterMapAddReduce = new FilterMapAddReduce(numbers2);


    let maping: Function = function(a, b) {return a + b;};

    expect(filter1.reduce(maping)).to.be.eql(6);
    expect(filter2.reduce(maping)).to.be.eql(744);
  });
});