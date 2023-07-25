const bcrypt = require("bcrypt");
const Students = require('../Models/students');


// Fetch a student's level by their ID
const getStudentLevel = async (req, res) => {
    const id = parseInt(req.params.id, 10) // Make sure id is an integer
  
    const student = await Students.getLevel(id)
  
    if (student.error) {
      res.status(500).json({ error: student.error })
    } else if (!student) {
      res.status(404).json({ error: 'Student not found' })
    } else {
      res.status(200).json({ student_level: student })
    }
}

const createStudent = async (req, res) => {
  try {
    const data = req.body;

    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    data["password"] = await bcrypt.hash(data["password"], salt);


    const newStudent = await Students.createStudent(data);
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getStudentHomeLanguage = async (req, res) => {
  const id = parseInt(req.params.id, 10); // Make sure id is an integer
  const student = await Students.getHomeLanguage(id);

  if (student.error) {
    res.status(500).json({ error: student.error });
  } else if (!student) {
    res.status(404).json({ error: 'Student not found' });
  } else {
    res.status(200).json({ student_home_language: student });
  }
}

const getStudentDetails = async (req, res) => {
  const id = parseInt(req.params.id, 10); // Make sure id is an integer
  const student = await Students.getStudentDetails(id);

  if (student.error) {
    res.status(500).json({ error: student.error });
  } else if (!student) {
    res.status(404).json({ error: 'Student not found' });
  } else {
    res.status(200).json(student);
  }
};


module.exports = {
    getStudentLevel,
    createStudent,
    getStudentHomeLanguage,
    getStudentDetails
};
