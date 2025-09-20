import http from 'http'
import fs from 'fs/promises'
import { serveStatic } from './utils/ServeStatic.js'
import { sendJSONres } from './utils/sendResponse.js'
import path from 'path'
const __dirname = import.meta.dirname

const PORT = 8000;

  const server = http.createServer(async(req, res) => {
  const publicDir = path.join(__dirname, 'public')
  const pathToResource = path.join(publicDir,'index.html')
  const content =await fs.readFile(pathToResource,'utf8')
  if(req.method === 'POST'){
    let body = ''
        
    req.on("data", chunk => {
      body += chunk.toString(); 
      
    });
    req.on("end", () => {
    console.log(`Your email is: ${body}`);
    res.statusCode = 201;
    res.setHeader("Content-Type", "text/html");
    res.end(content);
  });
  }else{
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content)
  }
  

  
});

server.listen(PORT, () => console.log(`Connected on Port: ${PORT}`))
