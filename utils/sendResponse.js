export const sendJSONres = ((res,statusCode,content) => {
    res.statusCode = statusCode
    res.setHeader('content-type','text/html')
    res.end(content)
})