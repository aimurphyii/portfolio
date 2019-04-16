'use strict'

require('dotenv').config();
// this is a library we are going ot bring into our server it allows us to create a special file ot store secret codes in--like city explorer API keys--we want to hide those keys and this is where we will hide them
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/',(request, response)=>response.send('index.html'));

app.get('/hello', (request, response) => {
  response.status(200).send('<h1>Hello</h1>')
});
// response200, 200 means A-okay
app.get('/data', (request,response)=>{
  let airplane = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well trained'
  }

  response.status(200).json(airplane);
});

app.use('*',(request,response)=>response.send('Sorry, that route does not exist'));

app.listen(PORT, ()=> console.log(`My FIRST Server is listening on PORT ${PORT}`));
