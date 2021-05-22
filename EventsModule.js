
// 🔗https://nodejs.org/api/events.html

// An Event is basically a signal that indicate something is happened in our application

import EventEmitter from "events";
// EventEmitter is a class so to you this EventEmitter we need to create new instance of that class

// Creating New instance of EventEmitter so here 'emitter' is a Object
const emitter = new EventEmitter();

// Register a Listener
// emitter.listeners()  or  emitter.on()
emitter.on("firstevent", ()=> {
    console.log('listener Called ...... ');
});

// emitter.emit() is use to raise a event 
// Along with raising a event we have to mention a listener 
// Listner must be declared above the emit ❗
emitter.emit("firstevent");

// Event Arguments

emitter.on("secoundevent",(arr)=>{
    console.log(`${arr.name} you called a listener ...... `)
});

emitter.emit("secoundevent",{name:"Piyush"});