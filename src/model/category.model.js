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
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            default: ''
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Category', schema)