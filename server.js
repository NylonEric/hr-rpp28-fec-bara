const express = require('express');
const PATH = require('path');
const app = express();
const port = 3000;

app.use(express.static(PATH.join(__dirname, 'client', 'dist')));

//this tells our server to refer to our routes file when requests are made to "/" (aka all request)
var router = require('./routes.js');
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});