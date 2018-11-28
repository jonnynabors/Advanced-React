require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: User express middleware to handle cookies
// TODO: User express middleware to populate current user JWT

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, details => {
    console.log(`Server is running on port http://localhost:${details.port}`)
})