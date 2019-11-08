
// import {sum,subtract,multiply} from './file1';
import * as calculator from './file1';

let a =4, b=5;
let total = calculator.sum(a,b);
console.log(total)

let diff= calculator.subtract(b,a);
console.log(diff);

let product = calculator.multiply(a,b);
console.log(product);