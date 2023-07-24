require("dotenv").config()
const { Pool } = require('pg')

console.log(process.env.DB_URL);
const db = new Pool({
    connectionString: process.env.DB_URL
})

module.exports = db
