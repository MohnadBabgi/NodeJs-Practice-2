import path from "path"
export const serveStatic = ((dir) =>{

    const filePath = path.join(dir,'public','index.html')
    console.log(`The path to the file is ${filePath}`)
    

})