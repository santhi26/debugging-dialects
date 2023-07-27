const request = require("supertest")
const server = require("../api")
const db = require("../database/db")

describe('API', () => {
    let api;
    let createdUserId;
    
    beforeAll(() => {
        api = server.listen(5000, () => {
            console.log("Test server running on port 5000")
        })
    })

    afterAll((done) => {
        console.log("Stopping test server")
        // if (createdUserId) {
        //     await request(api).delete(`/api/user/${createdUserId}`);
        // }
        db.end()
        api.close(done)
    })

    describe('Student', () => {

        const username = 'test';
        const password = '1';
        const email = 'test@gmail.com';
        const role = 'student';
        const student_home_language = 'portuguese';
        const student_name = "Alice";        
        const student_rating = null;
        const student_level = 1;
        

        test('should respond with 200 and student level', async () => {
          const response = await request(api).get('/api/student/1/level');
          expect(response.status).toBe(200);
          expect(response.body).toHaveProperty('student_level');
        });
      
        test('should respond with 404 for non-existent student', async () => {
          const response = await request(api).get('/api/student/999/level');
          expect(response.status).toBe(404);
          expect(response.body).toEqual({ error: 'Student not found' });
        });

        test('Should create a new student', async () => {
            const newStudentData = {
              username: 'testuser',
              password: 'testpassword',
              email: 'testuser@example.com',
              role: 'student',
              student_home_language: 'English',
            };

            const response = await request(api)
              .post('/api/student') 
              .send(newStudentData);          
           
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('user');
            expect(response.body).toHaveProperty('student');

            createdUserId = response.body.user.user_id;
            
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
    })

    describe('Teacher', () => {        

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
    })

    describe("Users", async() => {

        

        test('Should login as an user', async() => {
            const response = await request(api).post('/api/user/login').send(userLogin); 
            expect(response.status).toBe(200);
        })

    })

  });
