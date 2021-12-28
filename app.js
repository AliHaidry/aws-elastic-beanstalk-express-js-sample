const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Say hello to the DevOps but it SUCKS..:P.... world!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
