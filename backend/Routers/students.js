const express = require('express');
const router = express.Router();

const { 
    getStudentLevel,
    createStudent,
    getStudentHomeLanguage
} = require('../Controllers/students')

router.get('/:id/level', getStudentLevel)
router.get('/:id/language', getStudentHomeLanguage);
router.post('/', createStudent);

module.exports = router;
