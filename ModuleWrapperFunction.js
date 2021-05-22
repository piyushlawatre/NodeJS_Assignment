
// Module Wrapper Function
// During RunTime our code is wrapped inside IIFE (Immediately Invoked Function Expression) shown below : 

/*  
(function (exports, require, module, __filename, __dirname) {
    //module code
}); 
*/

//❌ throwing error if you make add "type": "module" in Package.json

console.log(__dirname,__filename );