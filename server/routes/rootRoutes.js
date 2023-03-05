const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
    const adatok = await User.find();
    res.json({ adatok });
});

router.post('/', async (req, res) => {
    const { username, email, password, passwordConfirm } = req.body;
    console.log(req.body);
    const newUser = new User({ username, email, password, passwordConfirm });
    await newUser.save();
    res.json({ newUser });
});

module.exports = router;
