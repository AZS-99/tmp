require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello again')
})

app.listen(process.env.PORT)