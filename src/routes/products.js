const router = require('express-promise-router')()
const { product } = require('../controllers')

router.route('/:id').get(product.findOne)
router.route('/').get(product.findAll)
router.route('/').post(product.create)
router.route('/:id').put(product.update)
router.route('/:id').delete(product.delete)
router.route('/').delete(product.deleteAll)

module.exports = router