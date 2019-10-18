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

      getAllUsers: async (req, res) => {
        const db = req.app.get("db");
        await db.query(
        `SELECT * FROM users;`
        ) .then(results => {
            res.send(results)
        })
      },
      
      getAllVendors: async (req, res) => {
        const db = req.app.get("db");
        await db.query(
        `SELECT * FROM vendor;`
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

    getMenuById: async (req, res) => {
      const db = req.app.get("db");
      const vId = req.session.vendor.id;
      await db.query(
        `SELECT * FROM text_menu where vendor_id = ${vId};`
      )
      .then(results => {
        res.send(results)
    })
    .catch(error => console.log(error));
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
        const date = req.body.date;

        const addLocation = await db.vendor_location.insert({
          address1: address1,
          address2: address2,
          city: city,
          state: state,
          zipcode: zipcode,
          vendor_id: req.session.vendor.id,
          date: date
        })
        res.sendStatus(200);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    },

    getVlocationsByVId: async (req, res) => {
        const db = req.app.get("db");
        const vId = req.session.vendor.id
        await db.query(
          `SELECT  * FROM vendor_location
          WHERE vendor_id = ${vId};`
        )
        .then(results => {
          res.send(results)
      })
      .catch(error => console.log(error));
    },

    getVlocationsByDate: async (req, res) => {
        const db = req.app.get("db");
        const date = req.body.todaysDate;
        console.log(date)
        await db.query(
          `SELECT vendor_id, v.vendor_name, address1, address2, city, state, zipcode, date FROM vendor_location va
          JOIN vendor v ON v.id = va.vendor_id
          WHERE date = '${date}'::date`
        )
        .then(results => {
            console.log(results)
          res.send(results)
      })
      .catch(error => console.log(error));
    },

    deleteVLocation: async (req, res) => {

      const db = req.app.get("db");
      const vId = req.session.vendor.id;
      const date = req.body.todaysDate;
      const address1 = req.body.address1;
      await db.query(
        `DELETE FROM vendor_location va WHERE va.vendor_id = ${vId} AND va.address1 = ${address1} AND va.date = '${date}'::date;`
      )
      .then(results => {
        res.send(results)
      })
      .catch(error => console.log(error));
    }
}