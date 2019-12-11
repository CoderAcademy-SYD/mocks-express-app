const router = require('express').Router()

// router.use 
router.use('/student', require('./student/studentRoutes'))
router.use('/class', require('./class/classRoutes'))

// Default route returns an HTML document displaying 
// the endpoints for the applications with a list
router.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>
                My Mocking Endpoints
            </title>
        </head>
        <body>
            <header>
                My Mocking Endpoints
            </header>
            <section>
                <ul>
                    <li>
                        Visit <a href="/student">/student</a> for a random student as JSON
                    </li>
                    <li>
                        Visit <a href="/class">/class</a> for a random class as JSON
                    </li>
                </ul>
            </section>
        </body>
    </html>
    `)
})

// `app.all` listens for all HTTP methods, if using this as a
// catch-all, make sure it is the last route that is declared
router.all('*', (req, res) => {
    res.status(404)
    res.send('404 Page not found')
})

module.exports = router