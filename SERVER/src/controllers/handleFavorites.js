let myFavorites = []

const postFav = (req, res) => {
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    let { id } = req.params
    myFavorites = myFavorites.filter((fav) => fav.id != id)
    res.status(200).json(myFavorites)
}

module.exports = { postFav, deleteFav }