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
    const newStudent = await Students.createStudent(req.body);
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

module.exports = {
  getStudentLevel,
  getStudentHomeLanguage,  // Add this line
};


module.exports = {
    getStudentLevel,
    createStudent,
    getStudentHomeLanguage
};
