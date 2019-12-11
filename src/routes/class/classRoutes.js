const faker = require('faker')
const classRouter = require('express').Router()
const classModel = require('../../models/class')
const mocks = require('../../helpers/mocks')

classRouter.get('/', (req, res, next) => {
    res.body = mocks.createMockClass()
    next()
})


classRouter.use((req, res, next) => {
    classModel.createClassRecord(res.body)
    res.send(res.body)
})

module.exports = classRouter