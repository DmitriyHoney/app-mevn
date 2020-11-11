const router = require('express-promise-router')()
const { category } = require('../controllers')

router.route('/:id').get(category.findOne)
router.route('/').get(category.findAll)
router.route('/').post(category.create)
router.route('/:id').put(category.findAll)
router.route('/:id').delete(category.findAll)

module.exports = router