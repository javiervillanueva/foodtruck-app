require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const massive = require("massive");
const bodyparser = require("body-parser");
const path = require("path");
const controller = require("./controller");

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(express.static(__dirname + '/build'))

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
app.get("/api/getAllUsers", controller.getAllUsers);
app.get("/api/get-all-vendor", controller.getAllVendors);
app.get("/api/logged-in-user", controller.getSessionUser);
app.get("/api/logged-in-vendor", controller.getSessionVendor);
app.get("/api/get-locations-id", controller.getVlocationsByVId);
app.get("/api/get-menu-items-id", controller.getMenuById);
app.post("/api/get-locations-date", controller.getVlocationsByDate);
app.post("/api/user-login", controller.loginUser);
app.post("/api/vendor-signup", controller.createVendor);
app.post("/api/vendor-login", controller.loginVendor);
app.post("/api/user-faves", controller.addTofaves);
app.post("/api/add-menu-item", controller.addMenuItem);
app.post("/api/add-vendor-location", controller.addVLocation);
app.delete('/api/logout', controller.logout);
app.post('/api/remove-event', controller.removeVLocation);
app.post('/api/delete-menu-item', controller.deleteMenuItem);
app.get('/api/get-users-faves', controller.getUserFaves);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(process.env.PORT, () => console.log("ready on port", process.env.PORT));
