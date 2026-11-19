const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', (name) => {
    console.log("Hello " + name);
});

event.emit('greet', 'NITIN');