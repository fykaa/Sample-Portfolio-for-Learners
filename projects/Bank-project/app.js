const express = require('express')
const router = require('./routes/router')

const app = express()


app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port' + port)
})