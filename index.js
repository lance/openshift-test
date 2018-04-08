'use strict';

const { createServer } = require('http');
const { world } = require('world');

const server = createServer((request, response) => response.end(`Hello ${world}`));
server.listen(8080, _ => console.log('Server listening on port 8080'));
