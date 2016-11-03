// import {PI} from './myModule';
// import {_sqrt} from './myModule';
// import {sqrt} from './myModule';
// import {square} from './myModule';

import PI from './theModule';
import theModule from './theModule';


var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(theModule.PI);
console.log(theModule.sqrt(+arg1));
console.log(theModule.square(+arg2));



