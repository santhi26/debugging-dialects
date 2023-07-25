const express = require('express');
const router = express.Router();

const { 
    createTeacher,
    getTeacherDetails,
} = require('../Controllers/teachers')

router.post('/', createTeacher);
router.get('/:id/details', getTeacherDetails);

module.exports = router;
