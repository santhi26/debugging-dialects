const {Router} = require('express');

const userController = require('../Controllers/users.js');
const studentController = require('../Controllers/students.js');
const teacherController = require('../Controllers/teachers.js');

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.post('/register/student', studentController.createStudent);
userRouter.post('/register/teacher', teacherController.createTeacher);

module.exports = userRouter;
