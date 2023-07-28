const request = require('supertest');
const {app} = require('../../api');
const {register, login} = require('../../Controllers/users');
const User = require('../../Models/Users');

describe('Unit tests for users controllers', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })


    describe('Register route', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            const user = new User({
                "username": "Oliver",
                "password": "$2b$10$YzDgjpwfKh8oNWDaoCk.ReLrTUQ0cQjrTgtq15I22FWvPihClhstW",
                "token": "7ce4e2c7-b806-462e-bcf5-66f0cb15baac",
                "email": "asd@gmail.com",
                "role": "student",
                "joined_date": "2023-07-24T09:50:54.001Z"
              });
            jest.spyOn(User, 'create').mockResolvedValue(user)

        })

        test('register route sends a response with a 201 status code', async () => {

            const response = await request(app).post('/api/user/register').send({username:"Oliver", password:"1", email:"asd@gmail.com", role:"student", joined_date:"2023-07-24T09:50:54.001Z"});

            expect(response.status).toBe(201);
        })

        test('Response is an object and has required properties', async () => {

            const response = await request(app).post('/api/user/register').send({username:"Oliver", password:"1", email:"asd@gmail.com", role:"student", joined_date:"2023-07-24T09:50:54.001Z"});

            expect(response.body).toBeInstanceOf(Object);
            expect(response.body).toHaveProperty('username');
            expect(response.body).toHaveProperty('password');
            expect(response.body).toHaveProperty('email');
            expect(response.body).toHaveProperty('token');
            expect(response.body).toHaveProperty('role');
            expect(response.body).toHaveProperty('joined_date');
        })

        test('login route sends a response with a 400 status code for an incorrect input', async() => {
            const response = await request(app).post('/api/user/register').send({username:"Thom"});

            expect(response.status).toBe(400);
        })
    })

    describe('Login Route', () => {

        beforeEach(() => {
            jest.clearAllMocks();

            const user = new User({
                "username": "Thomas",
                "password": "$2b$10$qo2rt5/6bCAYAT178yPDi.p5kxaXP04e7d1VmLn7myl7vw98VjBmi",
                "token": "7ce4e2c7-b806-462e-bcf5-66f0cb15baac",
                "email": "asd@gmail.com",
                "role": "student",
                "joined_date": "2023-07-24T09:50:54.001Z"
              });

            jest.spyOn(User, 'getOneByUsername').mockResolvedValue(user)
        })
        test('login route sends a response with a 200 status code', async() => {
            const response = await request(app).post('/api/user/login').send({username:"Thomas", password:"1"});

            expect(response.status).toBe(200);
        })

        test('login route sends a response with a 403 status code for an incorrect password', async() => {
            const response = await request(app).post('/api/user/login').send({username:"Thom", password:"2"});

            expect(response.status).toBe(403);
        })

        test('login route sends a response with a 400 status code for an incorrect input', async() => {
            const response = await request(app).post('/api/user/login').send({username:"Thom"});

            expect(response.status).toBe(403);
        })

    })
})