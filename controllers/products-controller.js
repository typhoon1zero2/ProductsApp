const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// Index
router.get("/", (req, res) => {
  Product.find({})
    .then((product) => {
      res.render("products/Index", { product });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
});

//About my page
router.get("/about", (req, res) => {
  res.render("products/About");
});
//Login Auth
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});
// New
router.get("/new", (req, res) => {
  res.render("products/New");
});

// Delete
router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    if (!err) {
      res.redirect("/products");
    } else {
      res.status(400).json({ error });
    }
  });
});

// Update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  req.body.isQuality = req.body.isQuality === "on" ? true : false;

  Product.findByIdAndUpdate(id, req.body, { new: true })
    .then(() => {
      res.redirect(`/products/${id}`);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// Create
router.post("/", (req, res) => {
  req.body.isQuality = req.body.isQuality === "on" ? true : false;
  Product.create(req.body)
    .then((createdProduct) => {
      res.redirect(`/products/${createdProduct._id}`);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// Edit
router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      res.render("products/Edit", { product });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

// Show
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => {
      res.render("products/Show", { product });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
});

module.exports = router;
