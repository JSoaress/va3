const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    value: {
        type: Number
    }
}, {
    collection: 'products'
})

module.exports = mongoose.model('product', ProductSchema)
