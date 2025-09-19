import http from 'http'
const PORT = 8000

const server = http.createServer( (req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html')
    res.end( '<html><h1>The server is working</h1></html>')


})

server.listen(PORT,() => console.log(`Connected on Port: ${PORT}`))
