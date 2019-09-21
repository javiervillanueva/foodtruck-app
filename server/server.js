require('dotenv').config();
const express = require('express');
const app = express();
const session = require("express-session");
const massive = require("massive");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer")


massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
})

app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        expires: 3600
    })
);

app.listen(8080, () => console.log('ready'))