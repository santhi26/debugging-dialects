const db = require('../database/db');

const Students = {
  // Get a student's level by their ID
  getLevel: async (id) => {
    try {
      const student = await db.query('SELECT student_level FROM students WHERE student_id = $1', [id]);

      if (student.rows.length > 0) {
        return student.rows[0].student_level;
      } else {
        return { error: "Student not found" };
      }
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

    createStudent: async (data) => {
    const { username, password, email, role, student_home_language } = data;

    try {
      const user = await db.query(
        'INSERT INTO users (username, password, email, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, password, email, role]
      );

      const student = await db.query(
        'INSERT INTO students (student_id, student_name, student_home_language) VALUES ($1, $2, $3) RETURNING *',
        [user.rows[0].user_id, username, student_home_language]
      );

      return { user: user.rows[0], student: student.rows[0] };
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },
};

module.exports = Students;
