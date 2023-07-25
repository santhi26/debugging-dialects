const db = require('../database/db');

const Teachers = {
  createTeacher: async (data) => {
    const { username, password, email, role, teacher_home_language, qualifications, teacher_biography } = data;

    try {
      const user = await db.query(
        'INSERT INTO users (username, password, email, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, password, email, role]
      );

      const teacher = await db.query(
        'INSERT INTO teachers (teacher_id, teacher_name, teacher_home_language, qualifications, teacher_biography) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [user.rows[0].user_id, username, teacher_home_language, qualifications, teacher_biography]
      );

      return { user: user.rows[0], teacher: teacher.rows[0] };
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },
};

module.exports = Teachers;
