const express = require('express');
const { rateLimiter } = require('./middlewares/rateLimiter');
const { isIPBlocked } = require('./middlewares/IPBlocking');
const { reCAPTCHA } = require('./middlewares/reCAPTCHA');


const app = express();

app.get('/' , isIPBlocked , rateLimiter , (req , res) => {
    res.send("hello world")
    //axios call to actual endpoints except pending
})

app.listen('3000', () => {
    console.log('app listening on port 3000')
})