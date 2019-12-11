const sqlite3 = require('sqlite3').verbose()

function createStudentRecord(studentMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $first_name: studentMock.firstName,
        $last_name: studentMock.lastName,
        $birthdate: studentMock.birthdate,
        $address: studentMock.address,
        $gender: studentMock.gender
    }

    const sql = `
    INSERT INTO students(
        first_name,
        last_name,
        birthdate,
        address,
        gender
    ) VALUES (
        $first_name,
        $last_name,
        $birthdate,
        $address,
        $gender
    )
    `

    db.serialize(() => {
        db.run(
            sql,
            parameters,
            function (err) {
                if (err) {
                    console.error(err)
                    db.close()
                } else {
                    console.log('Class saved to DB with id of: ', this.lastID)
                    db.close()
                }
            }
        )
    })
}

module.exports = { createStudentRecord }
