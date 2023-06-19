const http = require ('http');

const data = JSON.stringify({
    title : 'Electricals'
})

const options = {
    hostname: 'localhost',
    port: 8000,
    path : '/',
    method: 'PUT', // PUT , POST, DELETE
    headers: {
        'content-type' : 'application/json',
        'content-length': data.length
    }
}

const request = http.request(options, response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    })
})
request.on('error', error => {
    console.error('error');
})
request.end();