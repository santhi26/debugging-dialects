const User = require('../../SocketClasses/User');

describe('Testing class methods used for users in chat', () => {
    
    const user1 = new User('Oliver', '1', 'student', true);
    const user2 = new User('Oliver', '1', 'student', false);
    const user3 = new User('Oliver', '', 'student', false);

    test('changeStatus', () => {
        user1.changeStatus();
        expect(user1.is_online).toBeFalsy()
        user2.changeStatus();
        expect(user2.is_online).toBeTruthy()

    })

    test('deleteUserID', () => {
        user1.deleteUserID()
        expect(user1.user_id).toBe('');
    })

    test('addUserID', () => {
        user3.addUserID('aB4')
        expect(user3.user_id).toBe('aB4');
    })
})