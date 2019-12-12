const studentRouter = require('express').Router()
const studentModel = require('../../models/student')
const mocks = require('../../helpers/mocks')

/**
 * A GET route `/student` which returns
 * a mock student.
 */
studentRouter.get('/', (req, res, next) => {
    res.body = mocks.createMockStudent()
    next()
})

studentRouter.use((req, res) => {
    studentModel.createStudentRecord(req.body)
    res.send(res.body)
})

module.exports = studentRouter