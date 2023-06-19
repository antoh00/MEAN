const http = require ('http');

const server = http.createServer (function (request, response) {
    response.writeHead (200, {'content-type' : 'text/html'});
if (request.url === '/get'){
    response.write('You have reached the GET page')
    if (request.method === 'GET') {
        response.end('GET');

    }

}
else if (request.url === '/post'){
    response.write('Post Page');
    if (request.method === 'POST') {
        response.end('POST');

    }
}
else if (request.url === './put'){
    response.write('Put page');
    if (request.method === 'PUT') {
        response.end('PUT');

    }

}
else if (request.url === '/delete'){
    response.write('Delete page');
    if (request.method === 'DELETE') {
        response.end('DELETE');

    }
}else {
    response.write('Not found');
}
    
}).listen(8000, ()=>console.log('http://localhost:8000'));