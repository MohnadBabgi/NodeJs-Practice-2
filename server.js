import http from 'http'
import fs from 'fs/promises'
import { serveStatic } from './utils/ServeStatic.js'
import { sendJSONres } from './utils/sendResponse.js'
import path from 'path'
const __dirname = import.meta.dirname

const PORT = 8000;

  const server = http.createServer(async(req, res) => {
  const publicDir = path.join(__dirname, 'public')
  const pathToResource = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)
  const content = await fs.readFile(pathToResource,'utf8')
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content)
  
});

server.listen(PORT, () => console.log(`Connected on Port: ${PORT}`))
