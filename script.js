// create a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Example usage: logs a random integer between 1 and 10

const { EventEmitter } = require('events');
const myEvent = new EventEmitter();

// Register event
myEvent.on('greet', () => console.log('Hello!'));

// Emit event
myEvent.emit('greet');
