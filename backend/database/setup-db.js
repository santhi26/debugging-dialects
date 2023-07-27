const fs = require('fs')
const path = require('path');

require("dotenv").config()

const sql = fs.readFileSync(path.join(__dirname, 'setup.sql')).toString()

const db = require("./db")

db.query(sql)
    .then(data => console.log("Set up complete"))
    .catch(error => console.log(error))
