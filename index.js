// local module

// const myModule = require('./local-1')
const { a, add } = require('./local-1')
const { a: a2, add: add2 } = require('./local-2')

console.log(a2)
console.log(add2(2, 3));


// built-in module----------------
const path = require('path');
console.log(path.join('/C:/Project/node-technorat/', 'local-1.js'));



