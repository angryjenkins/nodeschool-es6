import {PI} from './myModule';
import {_sqrt} from './myModule';
import {sqrt} from './myModule';
import {square} from './myModule';

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));