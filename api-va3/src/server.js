const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}))
app.use('/imagens', express.static('imagens'))

// Mongo
mongoose.connect('mongodb://root:rootpwd@localhost:27017/va3?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use('/api', require('./routes'))

app.listen(3333)
