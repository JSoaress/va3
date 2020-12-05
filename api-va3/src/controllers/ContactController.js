const Contact = require('../models/ContactModel')

module.exports = {
    async create(req, res) {
        try {
            const contact = req.body

            const newContact = await Contact.create(contact)

            return res.status(200).json(newContact)
        } catch (error) {
            console.log(error)

            return res.status(500).json({})
        }
    }
}
