const genericCrud = require('./generic.controllers')
const Category = require('../model')

module.exports= {
    ...genericCrud(Category),
    //можно перезаписать
    create()
}