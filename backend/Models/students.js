const db = require('../database/db');

const Students = {
  // Get a student's level by their ID
  getLevel: async (id) => {
    try {
      const student = await db.query('SELECT student_level FROM students WHERE student_id = $1', [id]);
      console.log("🚀 ~ file: students.js:9 ~ getLevel: ~ student:", student.rows[0])

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
};

module.exports = Students;
