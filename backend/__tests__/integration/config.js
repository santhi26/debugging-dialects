require("dotenv").config();

const request = require('supertest');
const apiServer = require('../../api');

// make these things available to test suites
global.request = request 
global.app = apiServer


