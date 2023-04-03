import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('plz turn off the motor');
  setTimeout(() => {
      console.log('Reminder plz turn off the motor');    
  }, 3000);
});
// myEmitter.emit('event');
console.log('The Sript running');
myEmitter.emit('waterFull');
console.log('The Sript still running');