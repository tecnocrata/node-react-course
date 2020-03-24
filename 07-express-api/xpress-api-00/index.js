//First expressjs app
//based on: https://medium.freecodecamp.org/express-js-and-aws-lambda-a-serverless-love-story-7c77ba0eaa35
'use strict'
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world!'))
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}.`))