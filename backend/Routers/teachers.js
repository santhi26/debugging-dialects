const express = require('express');
const router = express.Router();

const { 
    createTeacher,
    getTeacherDetails,
    updateTeacherDetails
} = require('../Controllers/teachers')

router.post('/', createTeacher);
router.get('/:id/details', getTeacherDetails);
router.put('/:id/update', updateTeacherDetails);

module.exports = router;
