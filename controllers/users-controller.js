const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("user/Login", { session: req.session});
});
router.get("/signup", (req, res) => {
  res.render("user/SignUp", { session: req.session});
});
router.post("/login", async (req, res) => {
  // get the data from the request body
  const { username, password } = req.body;
  // search for the user
  User.findOne({ username })
    .then(async (user) => {
      // check if user exists
      if (user) {
        // compare password
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          // redirect to fruits page if successful
          req.session.username = username;
          req.session.loggedIn = true;
          req.session.userId = user._id;
          res.redirect("/products");
        } else {
          // error if password doesn't match
          res.json({ error: "password doesn't match" });
        }
      } else {
        // send error if user doesn't exist
        res.json({ error: "user doesn't exist" });
      }
    })
    .catch((error) => {
      // send error as json
      console.log(error);
      res.json({ error });
    });
});

router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  User.create(req.body)
    .then(() => {
      res.redirect("/user/login");
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/products");
  });
});

module.exports = router;
