const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    msg: {
        type: String
    }
}, {
    collection: 'contacts'
})

module.exports = mongoose.model('contact', ContactSchema)
