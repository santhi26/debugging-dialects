const {app, db} = require('../../api');
const User = require('../../Models/Users');

describe('User Model Tests', () => {

    const response = {rows:[new User({
        "user_id":1,
        "username": "Oliver",
        "password": "$2b$10$YzDgjpwfKh8oNWDaoCk.ReLrTUQ0cQjrTgtq15I22FWvPihClhstW",
        "token": "7ce4e2c7-b806-462e-bcf5-66f0cb15baac",
        "email": "asd@gmail.com",
        "role": "student",
        "joined_date": "2023-07-24T09:50:54.001Z"
      })]}


    describe('Testing getOneById', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        })

        test('Successfully returns one user', async () => {
            jest.spyOn(db, 'query').mockResolvedValue(response);

            const data = await User.getOneById(1);

            expect(data).toBeInstanceOf(User);
            expect(data.user_id).toBe(1);
            // console.log(data);
        })

        test('Returns error if less than one user is returned from db', async () => {
            jest.spyOn(db, 'query').mockResolvedValue({rows:[]});

            await expect(User.getOneById(1)).rejects.toThrowError("Unable to locate user.");
        })
    })



    describe('Testing getOneByUsername', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        })

        test('Successfully returns one user', async () => {
            jest.spyOn(db, 'query').mockResolvedValue(response);

            const data = await User.getOneByUsername("Oliver");

            expect(data).toBeInstanceOf(User);
            expect(data.username).toBe('Oliver');
            // console.log(data);
        })

        test('Returns error if less than one user is returned from db', async () => {
            jest.spyOn(db, 'query').mockResolvedValue({rows:[]});

            await expect(User.getOneByUsername(1)).rejects.toThrowError("Unable to locate user.");
        })
    })




    describe('Testing create method', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        })

        test('Returns one user', async () => {
            jest.spyOn(db, 'query').mockResolvedValue({rows:[{"user_id":1}]});
            jest.spyOn(User, 'getOneById').mockResolvedValue(response.rows[0]);

            const data = await User.create({
                "username": "Oliver",
                "password": "$2b$10$YzDgjpwfKh8oNWDaoCk.ReLrTUQ0cQjrTgtq15I22FWvPihClhstW",
                "email": "asd@gmail.com",
                "role": "student",
                "joined_date": "2023-07-24T09:50:54.001Z"
              })

            expect(data).toBeInstanceOf(User);
            expect(Object.keys(data)).toHaveLength(7);
            expect(data.username).toBe("Oliver");
        })
    })
})