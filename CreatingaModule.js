
// Creating a module in node 
// Comment with 🔴 is just the : alternative code | Old syntax ( Works only when we didnt add  "type": "module" in package.json )

import got from "got";  
//🔴 const got = require('got') 

// This URL is meant to be Private to this module
const url = "https://jsonplaceholder.typicode.com/posts";

// This function is meant to use in other module so we will export it
// Function getPostsTitle accepts userID and return corresponding Post Title
async function getPostsTitle (userID) {
    if (userID < 100 && userID >=0 ){
        const response = await got(url);
        const data = JSON.parse(response.body);
        console.log(`Title of UserId ${userID} : ${data[userID].title}`);
    }
    else{
        console.log("Accepted userId range is 0-99 !");
    }
}

// Exporting function getPostsTitle
export default {getPostsTitle}; 
//🔴 module.exports.getPostsTitle = getPostsTitle; 
// 🔗https://www.codegrepper.com/code-examples/javascript/javascript+es6+export+multiple+functions
// 🔗https://stackoverflow.com/questions/45781063/nodejs-how-group-and-export-multiple-functions-in-a-separate-file