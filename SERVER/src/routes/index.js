const loginController = require('../controllers/login')
const favoritesController = require('../controllers/handleFavorites')
const charactersController = require('../controllers/getCharById')
const { Router } = require('express')
const apiRouter = Router()

apiRouter.get('/character/:id', charactersController)
apiRouter.get('/login', loginController)
apiRouter.post('/fav', favoritesController.postFav)
apiRouter.delete('/fav/:id', favoritesController.deleteFav)

module.exports = apiRouter