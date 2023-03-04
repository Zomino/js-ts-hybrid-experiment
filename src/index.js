import express from 'express';

import hello from './hello';

const server = express();

server.get('/', (_, res) => res.send(hello()));

server.listen(3000, () => console.log('Server up: http://localhost:3000'));