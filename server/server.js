require('dotenv').config();
const express = require('express');
const app = express();
const session = require("express-session");
const massive = require("massive");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const controller = require("./controller")


massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
})
app.use(bodyparser.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        expires: 3600
    })
);


app.post("/api/user-signup", controller.createUser);
app.get("/api/getUser", controller.getUser);
app.post("/api/user-login", controller.loginUser);
app.post("/api/vendor-signup", controller.createVendor);
app.post("/api/vendor-login", controller.loginVendor);



app.listen(8080, () => console.log('ready'))