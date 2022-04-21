import { NumberAlgorithm } from "./numberAlgorithm";
import { FilterMapAddReduce } from "./filterMapAddReduce";
import { FilterMapSubReduce } from "./filterMapSubReduce";


/**
 * Client code
 */
 function clientCode(numberAlgorithm: NumberAlgorithm, filter: Function, map: Function, reduce: Function) {
  numberAlgorithm.run(filter, map, reduce);
}

let numbers: Array <number> = [0, 1, 2, 3];
let filter: Function = function(a) {return a < 10;};
let map: Function = function(a) {return a + 7;};
let reduce: Function = function(a, b) {return a + b;};
clientCode(new FilterMapAddReduce(numbers), filter, map, reduce);


