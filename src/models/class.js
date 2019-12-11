const sqlite3 = require('sqlite3').verbose()


function createClassRecord(classMock) {
    const db = new sqlite3.Database('./src/db/mocks.db', (err) => {
        if (err) {
            console.error(`Error connecting to database: ${err}`)
        }
    })

    const parameters = {
        $class_name: classMock.className,
        $class_motto: classMock.classMotto
    }

    const sql = `
    INSERT INTO classes(
        class_name,
        class_motto
    ) VALUES ($class_name, $class_motto)
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

module.exports = { createClassRecord }
