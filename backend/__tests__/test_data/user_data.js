const User = require('../../SocketClasses/User');

const mockUsers = [new User('Oliver', 1, 'student', true),
                    new User('Thomas', 2, 'student', false),
                    new User('OThomas', 3, 'teacher', true)
                ];

module.exports = mockUsers;