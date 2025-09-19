import http from 'http'
import fs from 'fs/promises'
import { serveStatic } from './utils/ServeStatic.js';
import { sendJSONres } from './utils/sendResponse.js';
import path from 'path'
const __dirname = import.meta.dirname

const PORT = 8000;

  const server = http.createServer( async(req, res) => {
  const pathToResource = path.join(__dirname, 'public', 'index.html')
  const content = await fs.readFile(pathToResource,'utf8')
  res.statusCode = 200;
  sendJSONres(res,res.statusCode,content)
  
});

server.listen(PORT, () => console.log(`Connected on Port: ${PORT}`));
