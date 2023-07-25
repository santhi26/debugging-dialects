const express = require('express');
const router = express.Router();

const { 
    getStudentLevel,
    createStudent,
} = require('../Controllers/students')

router.get('/:id/level', getStudentLevel)
router.post('/', createStudent);

module.exports = router;
