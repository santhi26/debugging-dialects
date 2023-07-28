import {io} from 'socket.io-client';

const URL = "https://backend-dialects.onrender.com";

export const socket = io(URL, {
    autoConnect: false
});
