const http = require('http')
const fs = require('fs');

// creating a server using raw node.js
const server = http.createServer()

//listener
server.on('request', (req, res) => {
    // console.log(req)
    if (req.url === '/read-file' && req.method === 'GET') {
        // streaming file reading
        // const readableStream = fs.createReadStream('./text/read.txt')
        // const readableStream = fs.createReadStream(__dirname +'/text/read.txt')
        const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt')
        readableStream.on('data', (buffer) => {
            res.statusCode = 200;
            res.write(buffer);

        })
        readableStream.on('end', () => {
            res.statusCode = 200;
            res.end('Stream is over')
        })

        readableStream.on('error', (error) => {
            console.log(error);
            res.statusCode = 500;
            res.end('something went worng!')
        })
    };

})

server.listen(5000, () => {
    console.log(`server is listening on port 5000`)
})