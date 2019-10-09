const bcrypt = require("bcrypt")

module.exports = {

  createUser: async (req, res) => {
    try {
      const db = req.app.get("db");
  
      const hash = await bcrypt.hash(req.body.password, 10);
  
      const newUser = await db.users.insert({
        name: req.body.firstName,
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
          return res.send(req.session.user);
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      },

      getSessionUser: (req, res) => {
        res.send(req.session.user);
      },
      
      getSessionVendor: (req, res) => {
        res.send(req.session.vendor);
      },

      getAllUsers: (req, res) => {
        const db = req.app.get("db");
        db.query(
        `SELECT * FROM users;`
        ) .then(results => {
            res.send(results)
        })
      },

      createVendor: async (req, res) => {
        try {
           const db = req.app.get("db");
       
           const hash = await bcrypt.hash(req.body.password, 10);
       
           const newVendor = await db.vendor.insert({
             vendor_name: req.body.vendorName,
             owner_name: req.body.ownerName,
             email: req.body.email,
             password: hash
           });
       
           delete newVendor.password;
           res.send(newVendor);
         } catch (error) {
           console.log(error);
           res.status(500).send(error);
         };
       },
 
 
     loginVendor: async (req, res) => {
         try {
           const db = req.app.get("db");
           const [vendor] = await db.vendor.find({ email: req.body.email });
           if (!vendor) return res.status(400).send("vendor not working");
       
           const authenticated = await bcrypt.compare(
             req.body.password,
             vendor.password
           );
           if (!authenticated)
             return res.status(400).send("authenticated not working");
       
           delete vendor.password;
           req.session.vendor = vendor;
           return res.send(vendor);
         } catch (error) {
           console.log(error);
           res.status(500).send(error);
         }
       },

       addTofaves: async (req, res, next) => {
        try {
            const db = req.app.get("db");
            const userId = req.session.user.id;
            const vendorId = req.body.vendorId;
            const addVendor = await db.users_fave.insert({
                user_id: userId,
                vendor_id: vendorId
            })
    
            res.sendStatus(200);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        } 
      },

      addMenuItem: async (req, res, next) => {
        try {
        const db = req.app.get("db");
        const itemTitle = req.body.title;
        const itemDesription = req.body.description;
        const itemPrice = req.body.price;

        const addItem = await db.text_menu.insert({
          title: itemTitle,
          description: itemDesription,
          price: itemPrice,
          vendor_id: req.session.vendor.id
        })
        res.sendStatus(200);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }, 

        logout: async (req, res) => {
        return req.session.destroy(err => {
          
          res.send("logged out")
        });
    },

    addVLocation: async (req, res) => {
      try {
        const db = req.app.get("db");
        // const date = req.body.date;
        const address1 = req.body.address1;
        const address2 = req.body.address2;
        const city = req.body.city;
        const state = req.body.state;
        const zipcode = req.body.zipcode;

        const addLocation = await db.vendor_location.insert({
          address1: address1,
          address2: address2,
          city: city,
          state: state,
          zipcode: zipcode,
          vendor_id: req.session.vendor.id
        })
        res.sendStatus(200);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    }
}