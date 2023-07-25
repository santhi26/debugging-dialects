const express = require('express');
const router = express.Router();

const { 
    getStudentLevel
} = require('../Controllers/students')

router.get('/:id/level', getStudentLevel)

module.exports = router;
