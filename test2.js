const {EventEmitter} = require('events');

const test = new EventEmitter();
const mass = [1, 2, 3];
test.on('TestEvent', (... args) => {
 console.log(`Событие TestEvent! Массив: ${args}`);
});
test.emit('TestEvent', mass);