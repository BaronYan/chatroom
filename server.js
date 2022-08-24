const express = require('express');
const {createServer} = require('http');
const path = require('path');

const app = express();
const server = createServer(app);

app.use(express.static(path.join(__dirname+"/public")));

server.listen(5000);

