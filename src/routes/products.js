const router = require('express-promise-router')()
const { product } = require('../controllers')

router.route('/:id').get(product.findOne)
router.route('/').get(product.findAll)
router.route('/').post(product.create)
router.route('/:id').put(product.findAll)
router.route('/:id').delete(product.findAll)

module.exports = router