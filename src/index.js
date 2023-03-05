import express from 'express';
import hello from 'test-module';

import bonjour from './bonjour.ts';

const server = express();

server.get('/bonjour', (_, res) => res.send(bonjour()));
server.get('/hello', (_, res) => res.send(hello()));

server.listen(3000, () => console.log('Server up: http://localhost:3000'));