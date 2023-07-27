const db = require("./db.js");

const createDbEnv = async () => {
  try {
    // Run the SQL code to create the tables
    await db.query(`
      -- Place the entire SQL code here for creating the tables
      -- (starting from CREATE TABLE users...)
      CREATE TABLE users (
        user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        token CHAR(36),
        email VARCHAR(255) UNIQUE NOT NULL,
        role VARCHAR(20) NOT NULL,
        joined_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE students (
        student_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        student_name VARCHAR(255),
        student_home_language VARCHAR(255) DEFAULT 'English',
        student_rating INTEGER,
        student_level INTEGER DEFAULT 1
      );

      CREATE TABLE teachers (
        teacher_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        teacher_name VARCHAR(255),
        teacher_profile_image TEXT DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        teacher_biography TEXT,
        teacher_home_language VARCHAR(255),
        qualifications VARCHAR(255),
        teacher_rating INTEGER,
        earnings INTEGER,
        is_verified BOOLEAN DEFAULT false
      );

      CREATE TABLE ratings (
        rating_id SERIAL PRIMARY KEY,
        reviewed_by_user_id INTEGER REFERENCES users(user_id),
        review_of_user_id INTEGER REFERENCES users(user_id),
        rating INTEGER,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE messages (
        message_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        sender_username VARCHAR(255) NOT NULL REFERENCES users(username),
        recipient_username VARCHAR(255) NOT NULL REFERENCES users(username),
        date_sent TIMESTAMPTZ DEFAULT 'NOW',
        message VARCHAR(10000) NOT NULL
      );

      CREATE TABLE flashcards (
        flashcard_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        level INTEGER,
        language VARCHAR(50) NOT NULL DEFAULT 'English'
      );

      CREATE TABLE flashcards_normal (
        flashcard_id INTEGER REFERENCES flashcards(flashcard_id),
        title VARCHAR(70),
        front TEXT,
        back TEXT,
        PRIMARY KEY (flashcard_id, title)
      );

      CREATE TYPE review_result AS ENUM ('Easy', 'Good', 'Hard', 'Wrong');

      CREATE TABLE flashcards_review_history (
        review_id SERIAL PRIMARY KEY,
        card_id INTEGER REFERENCES flashcards(flashcard_id),
        user_id INTEGER REFERENCES users(user_id),
        review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        review_result review_result,
        next_review_date TIMESTAMP,
        ease_factor REAL DEFAULT 2.5,
        repetitions INTEGER DEFAULT 0
      );

      CREATE TABLE user_flashcards (
        flashcard_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id),
        type VARCHAR(50) NOT NULL DEFAULT 'Normal',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE user_flashcards_review_history (
        review_id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        card_id INTEGER REFERENCES user_flashcards(flashcard_id),
        user_id INTEGER REFERENCES users(user_id),
        review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        review_result review_result,
        next_review_date TIMESTAMP,
        ease_factor REAL DEFAULT 2.5, 
        repetitions INTEGER DEFAULT 0
      );

      CREATE TABLE user_flashcards_normal (
        flashcard_id INTEGER REFERENCES user_flashcards(flashcard_id),
        title VARCHAR(70),
        front TEXT,
        back TEXT,
        image_url TEXT DEFAULT 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        PRIMARY KEY (flashcard_id, title)
      );
    `);
    console.log("Mock database environment created.");
  } catch (err) {
    console.error("Error creating mock database environment:", err.message);
  }
};

const populateDbEnv = async () => {
    try {
      await db.query(`
        INSERT INTO flashcards (type, level, language)
        VALUES
            ('Normal', 1, 'Spanish'),
            ('Normal', 1, 'Spanish'),          
            ('Normal', 33, 'English');
        
        INSERT INTO flashcards_normal (flashcard_id, title, front, back)
        VALUES
            (1, 'English Greeting', 'Hello', 'Hi'),
            (2, 'English Question', 'How are you?', 'I am fine, thank you.'),
            (3, 'English Phrases', 'Common Idioms', 'Expressions with figurative meanings.');
        
        INSERT INTO users (username, password, email, role)
        VALUES
            ('john_doe', 'password123', 'john@example.com', 'student'),
            ('jane_smith', 'testpass456', 'jane@example.com', 'student'),
            ('teacher_test', 'test', 'admin@example.com', 'teacher');
        
        INSERT INTO students (student_name, student_home_language)
        VALUES
            ('Alice', 'Spanish'),
            ('Bob', 'Spanish'),
            ('Eve', 'Spanish');
        
        INSERT INTO teachers (teacher_name, teacher_profile_image, teacher_biography, teacher_rating, earnings, is_verified)
        VALUES
            ('Michael', '', 'English teacher with experience in teaching conversational English.', 4.5, 1500, true),
            ('Sophia', '', 'Experienced English teacher offering tailored lessons.', 4.2, 1800, true),
            ('David', '', 'Passionate about teaching English to learners of all levels.', 4.8, 2000, false);
      `);
      console.log("Mock database environment populated.");
    } catch (err) {
      console.error("Error populating mock database environment:", err.message);
    }
  };

const destroyDbEnv = async () => {
  try {
    // Run the SQL code to drop the tables
    await db.query(`
      
    DROP TABLE IF EXISTS messages;
    DROP TABLE IF EXISTS flashcards_normal CASCADE;
    DROP TABLE IF EXISTS user_flashcards_normal CASCADE;
    DROP TABLE IF EXISTS user_flashcards_review_history CASCADE;
    DROP TABLE IF EXISTS user_flashcards CASCADE;
    DROP TABLE IF EXISTS flashcards_review_history CASCADE;
    DROP TABLE IF EXISTS flashcards CASCADE;
    DROP TABLE IF EXISTS chat_messages CASCADE;
    DROP TABLE IF EXISTS chats CASCADE;
    DROP TABLE IF EXISTS ratings CASCADE;
    DROP TABLE IF EXISTS qualifications CASCADE;
    DROP TABLE IF EXISTS teachers CASCADE;
    DROP TABLE IF EXISTS students CASCADE;
    DROP TABLE IF EXISTS users CASCADE;
    DROP TYPE IF EXISTS review_result;
    `);
    console.log("Mock database environment destroyed.");
  } catch (err) {
    console.error("Error destroying mock database environment:", err.message);
  }
};
module.exports ={
    createDbEnv,
   populateDbEnv,
   destroyDbEnv,
    
}