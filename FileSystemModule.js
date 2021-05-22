
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions
// 🔗https://nodejs.org/api/fs.html

import * as fs from 'fs';

// Sync Code 📌

// Create directory
fs.mkdirSync("SampleDir");

// In writeFileSync data will overwritten if there is any data
// If the File doesn't Exist New File will be created
fs.writeFileSync("file.txt","Music expresses that which cannot be put into words and that which cannot remain silent")

// In appendFileSync data will append to existing file
// If the File doesn't Exist New File will be created
fs.appendFileSync("file.txt"," We love the things we love for what they are ")

// readFileSync is used to read and it returns data in form of Buffer ❗
// Nodejs has additonal data type called Buffer (Not available in browser), 
// Buffer is mainly used to store binary data while reading from file or receiving packets over the network
const readFile = fs.readFileSync("file.txt");
console.log(readFile);
// To Change buffer data to string
const converToString = readFile.toString();
console.log(converToString);
// OR preferred method ⭐
const preferredReadFile = fs.readFileSync("file.txt", "utf-8");
console.log(preferredReadFile)

// To Rename the File we use renameSync
fs.renameSync("file.txt","text.txt")

// To Delete File Directory we use rmdirSync
fs.rmdirSync("SampleDir")

// To Delete File we use rmdirSync
fs.unlinkSync("text.txt")