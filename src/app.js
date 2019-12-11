const port = process.env.PORT || 3000

const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const router = require('./routes/router')

const app = express()

// Security repsonse header middleware
app.use(helmet())

// Logging middleware
app.use(morgan('combined'))

// Tie in routes using the Express Router:
app.use('/', router)

// Tell your application to listen for requests on port 3000 on localhost
app.listen(port, '127.0.0.1', () => {
    console.log('Listening on http://localhost:3000')
})