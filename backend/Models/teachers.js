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
      console.log("🚀 ~ file: teachers.js:23 ~ createTeacher: ~ user:", user)

      const teacher = await db.query(
        'INSERT INTO teachers (teacher_id, teacher_name, teacher_home_language, qualifications, teacher_biography, teacher_profile_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [user.rows[0].user_id, username, teacher_home_language, qualifications, teacher_biography, teacher_profile_image]
      );
      console.log("🚀 ~ file: teachers.js:29 ~ createTeacher: ~ teacher:", teacher)

      return { user: user.rows[0], teacher: teacher.rows[0] };
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

  getTeacherDetails: async (id) => {
    try {
      const teacher = await db.query(
        'SELECT teacher_name, teacher_profile_image, teacher_biography, teacher_home_language, qualifications, teacher_rating, earnings, is_verified FROM teachers WHERE teacher_id = $1', 
        [id]
      );
  
      if (teacher.rows.length > 0) {
        return teacher.rows[0];
      } else {
        return { error: "Teacher not found" };
      }
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

  getAllTeachers: async () => {
    try {
      const teacher = await db.query(
        'SELECT * FROM teachers'        
      );
  
      if (teacher.rows.length > 0) {
        return teacher.rows;
      } else {
        return { error: "Teacher not found" };
      }
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },

  updateTeacherDetails: async (id, data) => {
    const { 
      teacher_name, 
      teacher_profile_image, 
      teacher_biography, 
      qualifications
    } = data;
  
    try {
      const updatedTeacher = await db.query(
        `UPDATE teachers 
         SET teacher_name = $1, teacher_profile_image = $2, teacher_biography = $3, qualifications = $4 
         WHERE teacher_id = $5 RETURNING *`,
        [teacher_name, teacher_profile_image, teacher_biography, qualifications, id]
      );
  
      if (updatedTeacher.rows.length > 0) {
        return updatedTeacher.rows[0];
      } else {
        return { error: "Teacher not found" };
      }
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  },
  
  
};

module.exports = Teachers;
