const {app, server, db} = require('../../api');
const {fetchUserData} = require('../../')
const ioClient = require('socket.io-client');
const ioOptions = {
    transports: ['websocket'],
    forceNew: true,
    reconnection: false,
  };



describe('Testing socket.io server', () => {
    let clientSocket;

    beforeAll((done) => {
        server.listen(4000, () => {
            done()
        })
        jest.clearAllMocks();
    })

    afterAll((done) => {
        server.close(() => {
            done()
        })
        jest.resetAllMocks();
    })

    beforeEach((done) => {
        clientSocket = ioClient('http://localhost:4000', ioOptions);

        clientSocket.on('connect', () => {
            done()
        })
    })

    afterEach(() => {
        if (clientSocket.connected) {
            clientSocket.disconnect();
            clientSocket.off()
        }
    })

    //Essentially, the following tests will test the responses from the server side logic by retrieving it from the client socket.
    describe('Testing "username" event', () => {

        beforeEach(() => {
            jest.clearAllMocks();
        })

        test('Tests that users has length of 3 when user is already in list', (done) => {
            //Listens for  message event from server and performs test based on response.
            clientSocket.on('users', (users) => {
                expect(users).toHaveLength(3);
                expect(users[0].username).toBe('Oliver');
                done();
            })
            
            // Sends the initial data to the server to trigger the response.
            clientSocket.emit('username', 'Oliver');
        })

        test('Testing that users has length of 4 when username is not already in users', (done) => {
            const mockData = {rows:[{ username: 'OThomas2001', user_id: 4, role: 'student', is_online: true }]};
           

            jest.spyOn(db, 'query').mockResolvedValue(mockData);

            clientSocket.on('users', users => {
                expect(users).toHaveLength(4);
                expect(users[3].username).toBe('OThomas2001');
                done();
            })

            clientSocket.emit('username', 'OThomas2001');
        })

        test('Testing that is_online is updated to true', (done) => {
            clientSocket.on('users', (users) => {
                expect(users[1]).toHaveProperty('is_online');
                expect(users[1].is_online).toBeTruthy();
                done()
            })

            clientSocket.emit('username', 'Thomas');
        })

        test('Testing messages get sent back to client', (done) => {
            const mockData = {rows:[{sender_username:'Oliver', recipient_username:'Thomas', message:'Test', recipient_id:'jibberish', date_sent:"jibberish"}, 
                            {sender_username:'Thomas', recipient_username:'Oliver', message:'Test', recipient_id:'jibberish', date_sent:"jibberish"},
                             {sender_username:'OThomas', recipient_username:'Oliver', message:'Test', recipient_id:'jibberish', date_sent:"jibberish"}]}

            jest.spyOn(db, 'query').mockResolvedValue(mockData);
            clientSocket.on('messages', (messages) => {
                expect(messages).toHaveLength(3)
                done();
            })

            clientSocket.emit('username', 'Oliver');
        })
    })


    describe('Testing "new_message" route', () => {
        
        beforeEach(() => {
            jest.clearAllMocks();
        })

        test('Testing that mesasge is sent back to user', (done) => {
            clientSocket.on('new_message', message => {
                expect(message).toHaveProperty('sender_username');
                expect(message).toHaveProperty('recipient_username');
                expect(message).toHaveProperty('message');
                expect(message).toHaveProperty('recipient_id');
                expect(message).toHaveProperty('date_sent');
                done();
            })

            clientSocket.emit('new_message', {sender_username:'Oliver', recipient_username:'Thomas', message:'Jibberish', recipient_id:'Jibberish', date_sent:'Jibberish'})
        })
    })

})