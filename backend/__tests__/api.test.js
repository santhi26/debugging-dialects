const request = require("supertest")
const server = require("../api")
const db = require("../database/db")

describe('API', () => {
    let api;
   
    
    beforeAll(() => {
        api = server.listen(5000, () => {
            console.log("Test server running on port 5000")
        })
    })

    afterAll((done) => {
        console.log("Stopping test server")
        
        db.end()
        api.close(done)
    })

    describe('Student', () => {

        

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
    })
  });
