const {createServer}= require('http');
const {calc} = require('./calc_switch');

const server= createServer();
server.on('request', async(req, res)=> {

    const [, operation, a, b] = req.url.split('/');
    const result = calc(operation,Number(a),Number(b));
    res.writeHead(200, {
        'content-type': 'text/plain',
    });
    res.end(`${result}`);

});
server.listen(3000, 'localhost');