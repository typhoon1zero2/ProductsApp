const express = require('express');
const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();


router.post('/login', async (req, res) =>{
    await bcrypt.hash(req.body.password, await bcrypt.genSalt(12), (err, hash) => {
        req.body.password = hash
        User.create(req.body, (err) =>{
            if(!err) {
                res.redirect("/")
            }else{
                res.status(403).send(err)
            }
        })
    })
});

router.post('/login', async (req, res) =>{
    const { username, password } = req.body;
    User.findOne({username})
    .then(async (user) =>{
        if(user){
            const userLogin = await bcrypt.compare(password, user.password);
            if(userLogin){
                req.session.username = username;
                req.session.logged
            }
        }
    })
})
