const axios = require('axios')

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        let char = {
            id: id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            status: response.data.status
        }
        res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(char))
    })
    .catch(err => res.writeHead(500, {'Content-type': 'text/plain'}).end(err.message))
}

module.exports = getCharById