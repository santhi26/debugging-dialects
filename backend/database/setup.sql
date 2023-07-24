DROP TABLE IF EXISTS user_flashcards_review_history;
DROP TABLE IF EXISTS user_flashcards;
DROP TABLE IF EXISTS flashcards_review_history;
DROP TABLE IF EXISTS flashcards;
DROP TABLE IF EXISTS chat_messages;
DROP TABLE IF EXISTS chats;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS qualifications;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL,
    joined_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    student_id INTEGER PRIMARY KEY REFERENCES users(user_id),
    student_name VARCHAR(255),
    student_level INTEGER,
    student_rating INTEGER
);

CREATE TABLE teachers (
    teacher_id INTEGER PRIMARY KEY REFERENCES users(user_id),
    teacher_name VARCHAR(255),
    teacher_profile_image TEXT,
    teacher_home_language VARCHAR(255),
    qualifications VARCHAR(255),
    teacher_biography TEXT,
    teacher_rating INTEGER,
    is_verified BOOLEAN
);

CREATE TABLE ratings (
    rating_id SERIAL PRIMARY KEY,
    reviewed_by_user_id INTEGER REFERENCES users(user_id),
    review_of_user_id INTEGER REFERENCES users(user_id),
    rating INTEGER,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chats (
    chat_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(student_id),
    teacher_id INTEGER REFERENCES teachers(teacher_id),
    started_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_words INTEGER
);

CREATE TABLE chat_messages (
    message_id SERIAL PRIMARY KEY,
    chat_id INTEGER REFERENCES chats(chat_id),
    sender_id INTEGER REFERENCES users(user_id),
    message TEXT,
    word_count INTEGER,
    send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flashcards (
    flashcard_id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    level INTEGER,
    content TEXT
);

CREATE TABLE flashcards_review_history (
    review_id SERIAL PRIMARY KEY,
    card_id INTEGER REFERENCES flashcards(flashcard_id),
    user_id INTEGER REFERENCES users(user_id),
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    review_result BOOLEAN,
    score INTEGER
);

CREATE TABLE user_flashcards (
    flashcard_id INTEGER PRIMARY KEY REFERENCES flashcards(flashcard_id),
    user_id INTEGER REFERENCES users(user_id),
    front TEXT,
    back TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_flashcards_review_history (
    review_id SERIAL PRIMARY KEY,
    card_id INTEGER REFERENCES user_flashcards(flashcard_id),
    user_id INTEGER REFERENCES users(user_id),
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    review_result BOOLEAN,
    score INTEGER
);
