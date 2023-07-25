const Teachers = require('../Models/teachers');

const createTeacher = async (req, res) => {
  try {
    const newTeacher = await Teachers.createTeacher(req.body);
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTeacher,
};
