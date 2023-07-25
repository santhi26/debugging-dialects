const express = require('express');
const router = express.Router();

const { 
    createTeacher,
} = require('../Controllers/teachers')

router.post('/', createTeacher);

module.exports = router;
