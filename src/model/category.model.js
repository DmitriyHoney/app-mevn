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
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model('Category', schema)