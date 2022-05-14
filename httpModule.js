const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to my landing page')
    }
    if(req.url === '/about'){
        res.end('this is our short history')
    }
    res.end(
     `<h1>oops!</h1>
     <p> the page you are looking for is not available </p>
     <a href ="/"> back home </a> `
    )
})
server.listen(5000)