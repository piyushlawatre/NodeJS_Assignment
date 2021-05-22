
// Loading a module in node 
// Comment with 🔴 is just the : alternative code | Old syntax ( Works only when we didnt add  "type": "module" in package.json )

import mymodule from "./CreatingaModule.js";    
//🔴 const logger = require ("./CreatingaModule.js");

// using getPostsTitle which we have imported
console.log(mymodule.getPostsTitle(10));
