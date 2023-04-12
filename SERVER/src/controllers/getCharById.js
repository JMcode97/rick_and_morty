const axios = require('axios')

const getCharById = (req, res) => {
    const URL = 'https://rickandmortyapi.com/api/character/'
    let { id } = req.params
    axios.get(URL + id)
    .then(response => {
        if(response.data.name) { 
            let character = {
                id: id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin,
                image: response.data.image,
                status: response.data.status
            }
            res.status(200).json(character)  
        }else {
            res.status(404).json({message: 'Character not found...'})
        }
    })
    .catch(err => res.status(500).json({message: err.message}))
}

module.exports = getCharById