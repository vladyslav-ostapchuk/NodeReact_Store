const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

// router.post('/',)
// router.get('/',)
// router.get('/:id',)


router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)


module.exports = router