const express = require('express');
const Portfolio = require('../models/Portfolio');
const Agent = require('../models/Agent');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const portfolios = await Portfolio.find().populate('agent');
        const agents = await Agent.find();
        res.status(200).render('portfolio', { portfolios, agents });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.get('/portfolios', async (req, res) => {
    try {
        const portfolios = await Portfolio.find().populate('agent');
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, result, image, url, agents } = req.body;
        console.log({ title, description, result, image, url, agents });
        const tomb = [];
        for (let i = 0; i < agents.length; i++) {
            const ugynok = await Agent.findOne({ name: agents[i] });
            tomb.push(ugynok);
        }
        console.log(tomb);
        const newPortfolio = new Portfolio({
            title,
            description,
            result,
            image,
            url,
            agent: tomb,
        });
        await newPortfolio.save();
        res.status(201).json(newPortfolio);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/torol', async (req, res) => {
    try {
        const { id } = req.body;
        const porti = await Portfolio.findOneAndDelete({ _id: id });
        res.status(200).json(porti);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/modosit', async (req, res) => {
    const { id, title, description, result, image, url, agents } = req.body;
    const tomb = [];
    for (let i = 0; i < agents.length; i++) {
        const ugynok = await Agent.findOne({ name: agents[i] });
        tomb.push(ugynok);
    }
    const porti = await Portfolio.findOneAndUpdate(
        { _id: id },
        { title, description, result, image, url, agent: tomb },
        { new: true }
    );
    res.status(200).json({
        id,
        title,
        description,
        result,
        image,
        url,
        agents,
    });
});

module.exports = router;
