
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions
// 🔗https://nodejs.org/api/fs.html

import * as fs from 'fs';

// ASync Code 📌

// Create directory
fs.mkdir("AsynSampleDir", (err) => {
    const message = (err) ? "File Already Exist" : "Folder Created";
    console.log(message);
})

// In writeFile data will overwritten if there is any data
// If the File doesn't Exist New File will be created
fs.writeFile("file.txt","Music expresses words",(err) => {
    console.log("Write operation performed");
})

// In appendFile data will append to existing file
// If the File doesn't Exist New File will be created
fs.appendFile("file.txt"," love for what they are ",(err) => {
    console.log("File data appended");
})

// To Read data 
fs.readFile("file.txt","utf-8",(err,data) => {
    if(err) console.log("No File Found ! ");
    else console.log(data);
})
// Creating Error ❌ 
fs.readFile("fileNotExist.txt","utf-8",(err,data) => {
    if(err) console.log("No File Found ! ");
    else console.log(data);
})

// To Rename the File we use renameSync
fs.rename("file.txt","text.txt",(err) => {
    console.log("Renaming Done");
})

// To Delete File Directory we use rmdirSync
fs.rmdir("SampleDir",(err) => {
    const message = (err) ? "Directory Doesn't Exist" : "Directory Removed";
    console.log(message);
})

// To Delete File we use rmdirSync
fs.unlink("text.txt",(err) => {
    if(err) console.log("No File Found ! ");
    else console.log("File Deleted")
})
// Creating Error ❌ 
fs.unlink("textNotExist.txt",(err) => {
    if(err) console.log("No File Found ! ");
    else console.log("File Deleted")
})