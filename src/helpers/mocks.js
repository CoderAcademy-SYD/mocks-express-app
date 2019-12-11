const faker = require('faker')

/**
 * A function returning a mock student object
 */
function createMockStudent() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthdate: faker.date.past().toString(),
        address: faker.address.streetAddress(),
        gender: faker.name.title()
    }
}

function createMockClass() {
    return {
        className: faker.hacker.verb(),
        classMotto: faker.finance.accountName()
    }
}

module.exports = {
    createMockClass,
    createMockStudent
}