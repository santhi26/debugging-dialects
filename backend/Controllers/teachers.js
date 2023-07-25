const bcrypt = require("bcrypt");

const Teachers = require('../Models/teachers');

const createTeacher = async (req, res) => {
  try {
    const data = req.body;

    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    data["password"] = await bcrypt.hash(data["password"], salt);

    const newTeacher = await Teachers.createTeacher(data);
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTeacherDetails = async (req, res) => {
  const id = parseInt(req.params.id, 10); // Make sure id is an integer
  const teacher = await Teachers.getTeacherDetails(id);

  if (teacher.error) {
    res.status(500).json({ error: teacher.error });
  } else if (!teacher) {
    res.status(404).json({ error: 'Teacher not found' });
  } else {
    res.status(200).json(teacher);
  }
};

module.exports = {
  createTeacher,
  getTeacherDetails,
};
