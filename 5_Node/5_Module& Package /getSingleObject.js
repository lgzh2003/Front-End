var Hello = require('./singleObject');
var obj1 = new Hello();
obj1.setName('Keyu');
var obj2 = new Hello();
obj2.setName('Max');
console.log(obj1.callName());
console.log(obj2.callName());