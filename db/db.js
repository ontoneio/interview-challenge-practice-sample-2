const pgp = require('pg-promise')()

const connection = 'postgres:///cars'
const db = pgp(connection)

