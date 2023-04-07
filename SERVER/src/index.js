const http = require('http')
const data = require('./utils/data')
const getCharById = require('./controllers/getCharById')

PORT = 3001

http.createServer((req, res) => {
    console.log(`Server raised in port: ${PORT}`)
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')) {
        paramsId = Number(req.url.split('/').pop())
        getCharById(res, paramsId)
    }
})
.listen(PORT, 'localhost')