
// The os module provides operating system-related utility methods and properties.
// 🔗https://nodejs.org/api/os.html

import os from "os"; 
//🔴 const os = require("os")

const myOsType = os.type();
const osVersion = os.version();
const totalmemory = os.totalmem();
const freememory = os.freemem();

console.log(`Your OS is ${myOsType} running on version ${osVersion} `);
// 🔗https://stackoverflow.com/questions/33837689/convert-bytes-into-gigabytes-with-javascript-math
console.log(`The Total Memory Space (RAM) in your os : ${totalmemory/1024/1024/1024} GB`);
console.log(`The Free Memory Space (RAM) in your os : ${freememory/1024/1024/1024} GB`);
