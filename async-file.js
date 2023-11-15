const fs = require('fs');


// reading test asynchonously

fs.readFile('./text/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error('Error message text')
    }

    // writing text asynchonously
    fs.writeFile('./text/read3.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error('Error writing data')
        }

    })
})

console.log('testing asynchonous');