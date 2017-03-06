//Step1: declare event object
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
//Step2: Register an event, and write a Callback Function
event.on('some_event',function () {
    console.log('It is a self defiend event');
});
//Step3: trigger the event
    setTimeout(function () {// setTimeout here means after 1 seconds let the event emit
        event.emit('some_event'); //emit here is like trigger
    },1000);



