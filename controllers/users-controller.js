// const express = require("express");

// const User = require('./User.js');

// const bcrypt = require('bcrypt');

// const router = express.Router();

// router.post('/signup', async (req, res) => {
//     await bcrypt.hash(req.body.password, await bcrypt.genSalt(10), (err, hash) => {
//         req.body.password = hash
//         User.create(req.body, (err) => {
//             if (!err) {
//                 res.status(200).send({message: 'user created'})
//             } else {
//                 res.status(400).send(err)
//             }
//         })
//     })
    
// })






// module.exports = router;