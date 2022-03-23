// Stwórz API kalkulator. Niech przyjmuje w ścieżce
// najpierw nazwę operacji, a potem dwie liczby. przykład adresu:
// http://localhost:3000/add/2/2 powinno wyjść 4

const {createServer}= require('http');

const server= createServer();
server.on('request', async(req, res)=>{
    const ar= req.url.split('/');
    const [,action,a,b]= ar;
    const aN= Number(a);
    const bN= Number(b);

    if (action==='add') {
        const add= aN + bN;
        res.writeHead(200, {
            'content-type': 'text/plain',
        });
        res.end(`${add}`);
    } else if ( action ==='subtract'){
        const subtract= aN - bN;
        res.writeHead(200, {
            'content-type': 'text/plain',
        });
        res.end(`${subtract}`);
    } else if (action==='multiply') {
        const multiply = aN * bN;
        res.writeHead(200, {
            'content-type': 'text/plain',
        });
        res.end(`${multiply}`);
    }else if (action ==='divide') {
        const divide = aN / bN;
        res.writeHead(200, {
            'content-type': 'text/plain',
        });
        res.end(`${divide}`);
    }
});
server.listen(3000,'localhost');