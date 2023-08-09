const express = require('express');
const { sendEmail } = require('../utils/sendEmail.js');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/contact', (req, res) => {
    const { name, email, phone, message } = req.body
    sendEmail({
        to: "olivosergio09@gmail.com",
        subject: "Mi primer Email",
        text: `hello word ${name}`
    })

    res.send({message: 'email send'}).status(200)
});



module.exports = router;
