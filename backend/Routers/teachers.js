const express = require('express');
const router = express.Router();

const { 
    createTeacher,
    getTeacherDetails,
    updateTeacherDetails,
    getAllTeachers
} = require('../Controllers/teachers')

router.post('/', createTeacher);
router.get('/:id/details', getTeacherDetails);
router.put('/:id/update', updateTeacherDetails);
router.get('/allTeachers', getAllTeachers) 

module.exports = router;
