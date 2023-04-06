const http = require('http')
const data = require('./utils/data')

PORT = 3001

http.createServer((req, res) => {
    console.log(`Server raised in port: ${PORT}`)
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')) {
        paramsId = Number(req.url.split('/').pop())
        let character = data.filter((char) => char.id === paramsId)[0]
        res.end(JSON.stringify(character))
    }

})
.listen(PORT, 'localhost')