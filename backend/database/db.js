require("dotenv").config()
const { Pool } = require('pg')
let db;

if(process.env.NODE_ENV == "test") {
    console.log("test DB")
    db = new Pool({
        connectionString: process.env.TEST_DB_URL
    })
} else {
    db = new Pool({
       connectionString: process.env.DB_URL
    })
}


module.exports = db
