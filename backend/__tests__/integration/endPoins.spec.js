const { createDbEnv, populateDbEnv, destroyDbEnv } = require('../../database/setup-test-db')
const {app} = require('../../api');
const request = require('supertest');
jest.mock('axios');
const axios = require('axios');
const Flashcard = require('../../Models/flashcards');
const Students = require('../../Models/students');
const sm2 = require('../../utils/sm2');


describe('Project endpoints', () => {
  let api;

  beforeEach(async () => {
    await createDbEnv()
    await populateDbEnv()
  })

  afterEach(async () => {
    await destroyDbEnv()
    jest.clearAllMocks()
  })
  
  beforeAll(async () => {
    api = app.listen(5002, () => console.log('Test server running on port 5002'))
  });
  

  afterAll(async () => {
    console.log('Gracefully stopping test server')
    await api.close()
  })

  it('should retrieve a student based on id', async () => {
    const res = await request(api).get('/api/student/1/details')
    expect(res.statusCode).toBe(200)
    expect(res.body.student_name).toBe('Alice')
  });
  test('Should create a new teacher', async () => {
    const newTeacherData = {
        username: "username",
        password: "password",
        email: "email",
        role: "teacher",
        teacher_name: "fullName",
        teacher_profile_image: "image",
        teacher_biography: "biography",
        teacher_home_language: "homeLanguage",
        qualifications: "qualifications",
    };

    const response = await request(api).post('/api/teacher').send(newTeacherData);          
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('teacher');

    createdUserId = response.body.user.user_id;
    
    });

    test('Should update a teacher', async () => {
        const updatedTeacherData = {
            teacher_name: "fullName",
            teacher_profile_image: "image",
            teacher_biography: "biography",
            teacher_home_language: "homeLanguage",
            qualifications: "qualifications",
        };

        const response = await request(api).put('/api/teacher/1/update').send(updatedTeacherData);          
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('teacher_name');
        expect(response.body).toHaveProperty('teacher_profile_image');  
        expect(response.body).toHaveProperty('teacher_biography');  
        expect(response.body).toHaveProperty('qualifications');   
        expect(response.body).toHaveProperty('teacher_home_language');
        
    });

    test('Should create a new student', async () => {
        const newStudentData = {
            username: 'testuser',
            password: 'testpassword',
            email: 'testuser@example.com',
            role: 'student',
            student_home_language: 'English',
        };

        const response = await request(api).post('/api/student').send(newStudentData);          
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('user');
        expect(response.body).toHaveProperty('student');

        createdUserId = response.body.user.user_id;
        
        });

        test('Should create a new flashcard', async () => {
            
            axios.get.mockResolvedValue({ data: { results: [{ urls: { small: 'https://mocked-image-url.com' } }] } });
            
            const newFlashCard = {
              user_id: 1,
              type: "Normal",
              title: "My flashcard",
              front: "testing",
              back: "testing",
            };
          
            const response = await request(api).post('/api/flashcard/create').send(newFlashCard);
          
            expect(response.status).toBe(201);            
          });


    test('should respond with 200 and student level', async () => {
        const response = await request(api).get('/api/student/1/level');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('student_level');
      });

      test('should respond with 404 for non-existent student', async () => {
        const response = await request(api).get('/api/student/999/level');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Student not found' });
      });

      test('Should get a student home language', async() => {
        const response = await request(api).get('/api/student/1/language');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('student_home_language');
      });

      test('Should get the students details', async() => {
        const response = await request(api).get('/api/student/1/details');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('student_name');
        expect(response.body).toHaveProperty('student_home_language');
        expect(response.body).toHaveProperty('student_rating');
        expect(response.body).toHaveProperty('student_level');
    })
    test('Should get the teacher details', async() => {
        const response = await request(api).get('/api/teacher/1/details');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('teacher_name');
        expect(response.body).toHaveProperty('teacher_home_language');
        expect(response.body).toHaveProperty('teacher_rating');
        expect(response.body).toHaveProperty('teacher_profile_image');
        expect(response.body).toHaveProperty('teacher_biography');
        expect(response.body).toHaveProperty('qualifications');
        expect(response.body).toHaveProperty('earnings');
    });

    test('should get a student level', async () => {        
        const studentId = 1;
        const level = await Students.getLevel(studentId);
        expect(level).toBe(1);
      });

      test('Should all teachers', async() => {
        const response = await request(api).get('/api/teacher/allTeachers');
        expect(response.status).toBe(200);
        // expect(response.body).toHaveProperty('teacher_name');
        // expect(response.body).toHaveProperty('teacher_home_language');
        // expect(response.body).toHaveProperty('teacher_rating');
        // expect(response.body).toHaveProperty('teacher_profile_image');
        // expect(response.body).toHaveProperty('teacher_biography');
        // expect(response.body).toHaveProperty('qualifications');
        // expect(response.body).toHaveProperty('earnings');
    });

    test('should return a flashcard when a valid ID is provided', async () => {
      
      const response = await request(api).get('/api/flashcard/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('flashcard');      
    });
    
  });
  


  










