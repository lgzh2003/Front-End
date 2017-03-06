var myModule = require('./module');
console.log('5+3: '+ myModule.addMethod(5,3));
myModule.setName('keyu');
var myModule2 = require('./module');
myModule2.setName('Max')
console.log(myModule.callName()); // 'Basically we thought it will be keyu, however the answer is Max'