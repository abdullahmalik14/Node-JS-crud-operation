const fs = require("fs")

// -----------------------CREATE---------------------------------

fs.writeFileSync("text.txt","Hello world")

// -----------------------READ---------------------------------

const val =fs.readFileSync("text.txt","utf-8")
console.log(val);

// -----------------------UPDATE---------------------------------

const newData = "This is an updated content"
fs.writeFileSync("text.txt",newData)

const updatedContent = fs.readFileSync("text.txt","utf-8")
console.log(updatedContent);

// -----------------------DELETE---------------------------------

fs.writeFileSync("text.txt","")

const deleteContent = fs.readFileSync("text.txt","utf-8")
console.log(deleteContent);