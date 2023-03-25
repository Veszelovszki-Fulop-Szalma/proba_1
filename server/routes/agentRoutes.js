const express = require('express');
const Agent = require('../models/Agent');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const adatok = await Agent.find();
        res.status(200).render('agent', { adatok });
    } catch (error) {
        res.status(500).json({ msg: 'Valami elromlott!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const newAgent = new Agent(body);
        await newAgent.save();
        res.status(201).json(newAgent);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/torol', async (req, res) => {
    try {
        const { id } = req.body;
        const ugyi = await Agent.findOneAndDelete({ _id: id });
        res.status(200).json(ugyi);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

module.exports = router;
