const bcrypt = require("bcrypt")

module.exports = {

   createUser: async (req, res) => {
        try {
          const db = req.app.get("db");
      
          const hash = await bcrypt.hash(req.body.password, 10);
      
          const newUser = await db.users.insert({
            name: req.body.name,
            email: req.body.email,
            password: hash
          });
      
          delete newUser.password;
          res.send(newUser);
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        };
      },


    loginUser: async (req, res) => {
        try {
          const db = req.app.get("db");
          const [user] = await db.users.find({ email: req.body.email });
          if (!user) return res.status(400).send("user not working");
      
          const authenticated = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (!authenticated)
            return res.status(400).send("authenticated not working");
      
          delete user.password;
          req.session.user = user;
          return res.send("success yay");
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      }
}