const db = require('../database/db');
const {v4: uuidv4} = require("uuid");

const Teachers = {
  createTeacher: async (data) => {
    const { 
      username, 
      password, 
      email, 
      role, 
      teacher_home_language, 
      qualifications, 
      teacher_biography,
      teacher_profile_image 
    } = data;

    try {
      const token = uuidv4();
      const user = await db.query(
        'INSERT INTO users (username, password, token, email, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [username, password, token, email, role]
      );

      const teacher = await db.query(
        'INSERT INTO teachers (teacher_id, teacher_name, teacher_home_language, qualifications, teacher_biography, teacher_profile_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [user.rows[0].user_id, username, teacher_home_language, qualifications, teacher_biography, teacher_profile_image]
      );

      return { user: user.rows[0], teacher: teacher.rows[0] };
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },
};

module.exports = Teachers;
