const fs = require('fs')

// reading a file text
const readText = fs.readFileSync('./text/read.txt', 'utf-8');

console.log(readText)


// write a text
const writeText = fs.writeFileSync('./text/write.txt', readText + 'This is my written text')
console.log(writeText)

