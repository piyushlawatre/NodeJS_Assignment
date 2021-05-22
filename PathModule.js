
// The path module provides utilities for working with file and directory paths
// 🔗https://nodejs.org/api/path.html

import path from "path"; 
//🔴 const path = require('path')

const pathObject = path.parse("D:\\Nodejs_Assigment\\PathModule.js");
console.log(pathObject);

const basename = path.basename("D:\\Nodejs_Assigment\\PathModule.js");
console.log(basename);