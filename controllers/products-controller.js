const express = require('express');
const Product = require('../model/Products.js');


// Create Router
const router = express.Router();


router.get('/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'BeaAir Force 1 ',
          description: 'The Nike Air Force 1 React “White Ice” will make its debut in two days as it easily a perfect model to flaunt for the summer months. This React-infused iteration of the timeless Air Force 1 boasts a pristine white mesh and suede upper with transparent tongues and heels. Finishing details include the Nike React branding on the tongues and medial heel, coral accents on the insoles and an icy translucent outsole.',
          color: "black",
          image: 'https://pkshoes.store/wp-content/uploads/2022/03/Nike-Air-Force-1-React-White-Ice-1-1.jpg',
          price: 250,
          qty: 2
        }, 
        {
          name: 'Air Jordan 3 Retro',
          description: 'Originally released as one of the four OG colorways in 1988, the Air Jordan 3 Black/Cementsaw several retro releases, in 1994, 2001, and in 2008 as part of the Air Jordan 20/3 Collezione (Countdown) Pack. This 2011 release is part of an Air Jordan 3 retro drop that commemorated the 23rd anniversary of the shoe. A non-OG retro release, this version has the Jumpman logo on the tongue and heel section.',
          color: "blue",
          image: 'https://pkshoes.store/wp-content/uploads/2021/06/13702_03.jpg.jpg',
          price: 999,
          qty: 2
        }, {
          name: 'Yeezy Slides Bone',
          description: 'A signature subtle colour way allows the minimalist feel of these Yeezy slides to take the focus. Crafted using EVA foam they feature groove detailing in the sole and a lightweight construction.',
          color: "Yellow",
          image: 'https://pkshoes.store/wp-content/uploads/2021/06/PKS-YZ-SD-101-004-600x600.jpg',
          price: 499,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await Product.create(newProducts)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
  })
// Index
router.get('/', (req, res) => {
    Product.find({})
    .then((product) => {
        res.render("products/Index", { product })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// New
router.get('/new', (req, res) => {
    res.render('products/New')
})

// Delete
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if(!err) {
            res.redirect('/products')
        } else {
            res.status(400).send(err)
        }
    })
});

// Update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    req.body.isQuality = req.body.isQuality === "on" ? true : false;

    Product.findByIdAndUpdate(id, req.body, { new: true})
        .then(() => {
            res.redirect(`/products/${id}`)
        })
        .catch((error) => {
            res.status(400).json({error})
        })
})


// Create
router.post('/', (req, res) => {
    req.body.isQuality = req.body.isQuality === 'on' ? true : false;
    Product.create(req.body)
        .then((createdProduct)=>{
            res.redirect(`/products/${createdProduct._id}`)
        })
        .catch((error)=>{
            res.status(400).json({ error })
        })
})

// Edit
router.get('/:id/edit', (req, res) => {
    const {id} = req.params
    Product.findById(id)
        .then((product) => {
            res.render('products/Edit', { product })
        })
        .catch((error) => {
            res.status(400).json({error})
        })
})


// Show
router.get('/:id', (req, res) => {
const {id} = req.params;

    Product.findById(id)
        .then((product) => {
            res.render('products/Show', { product })   
        })
        .catch((error)=> {
            res.status(400).json({ error })
        })
})


module.exports = router;