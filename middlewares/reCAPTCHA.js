const { response } = require('express');
const request = require('request');
require('dotenv').config();

const reCAPTCHA = (req, res, next) => {
    if(req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null)
        return res.json({'success' : false , 'msg' : 'please select captcha'})
    
    const secretKey = process.env.SECRETKEY;

    const verifyUrl =`https:/google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

    request(verifyUrl , (err , response , body) => {
        body = JSON.parse(body);

        if(body.success !== undefined && !body.success){
            return res.json({'success' : false , 'msg' : 'Failed captcha verification'})
        }

    })

    next()
}

module.exports = {reCAPTCHA};