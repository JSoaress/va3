const express = require('express')

const ProductController = require('./controllers/ProductController')
const ContactController = require('./controllers/ContactController')

const routes = express.Router()

routes.get('/product/list', ProductController.list)
routes.post('/product/create', ProductController.create)

routes.post('/contact/create', ContactController.create)

module.exports = routes