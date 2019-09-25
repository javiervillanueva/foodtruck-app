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

app.post("/api/signup", controller.createUser);

// app.post("/login", async (req, res) => {
//     try {
//       const db = req.app.get("db");
//       const [user] = await db.users.find({ email: req.body.email });
//       if (!user) return res.status(400).send("user not working");
  
//       const authenticated = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       if (!authenticated)
//         return res.status(400).send("authenticated not working");
  
//       delete user.password;
//       req.session.user = user;
//       return res.send("success yay");
//     } catch (error) {
//       console.log(error);
//       res.status(500).send(error);
//     }
//   });

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        expires: 3600
    })
);

app.listen(8080, () => console.log('ready'))