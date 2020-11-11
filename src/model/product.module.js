const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: ''
        },
        amount: {
            type: Number,
            default: ''
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Product', schema)