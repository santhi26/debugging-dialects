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

module.exports = {
  createTeacher,
};
