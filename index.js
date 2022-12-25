const express = require('express');
const rateLimit = require('express-rate-limit');
const { isIPBlocked } = require('./middlewares/IPBlocking');


const app = express();

const limiter = rateLimit({
    windowMs: 1000 * 60 * 15,
    max : 100,
    message : "ya ro7 ommak"
})

app.get('/' , isIPBlocked , limiter , (req , res) => {
    res.send(req.ip)
    //axios call to actual endpoints except pending
})

app.listen('3000', () => {
    console.log('app listening on port 3000')
})