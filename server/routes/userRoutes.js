const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', async (req, res) => {
    const adatok = await User.find();
    res.status(200).render('user', { adatok });
});

router.post('/torol', async (req, res) => {
    const { id } = req.body;
    // console.log(id);
    const userke = await User.findOneAndDelete({ _id: id });
    // console.log(userke);
    res.status(200).json(userke);
});

router.get('/register', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // console.log(req.body);

        const userke = await User.findOne({ username });

        if (userke) {
            return res
                .status(500)
                .json({ msg: 'Ezzel  a névvel már létezik felhasználó!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            passwordConfirm: hashedPassword,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.get('/login', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res
                .status(500)
                .json({ msg: 'Ilyen néven nincs felhasználó!' });
        }

        const vanE = await bcrypt.compare(password, user.password);

        if (vanE) {
            res.status(200).json(user);
        } else {
            res.status(500).json({ msg: 'Valami végzetes hiba történt!' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

module.exports = router;
