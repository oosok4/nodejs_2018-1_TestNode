console.log('hello, world');
const circle = require('./circle');
console.log('Area of a circle =' + circle.area(3));
console.log('Circumference of a circle =' + circle.circum(3));
console.log('PI = ' + circle.pi);

const square = require('/square');
let mySquare = square(5);
mySquare = square(10);
console.log('Area of a square =' + mySquare.area());  
console.log('circumference of a square =' + mySquare.circum);

const os = require('os');
console.log(os.type());
console.log(os.cpus());