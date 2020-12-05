const Product = require('../models/ProductModel')

module.exports = {
    async list(req, res) {
        try {
            let products = await Product.find()

            products.forEach((product) => product.image = `http://localhost:3333/imagens/${product.image}`)

            return res.status(200).json(products)
        } catch (error) {
            console.log(error)

            return res.status(500).json({})
        }
    },

    async create(req, res) {
        try {
            let product = req.body

            const image = req.files.image
            image.mv(`./imagens/${image.name}`)

            product = {
                ...product,
                'image': image.name
            }

            const newProduct = await Product.create(product)

            return res.status(200).json(newProduct)
        } catch (error) {
            console.log(error)

            return res.status(500).json({})
        }
    }
}
