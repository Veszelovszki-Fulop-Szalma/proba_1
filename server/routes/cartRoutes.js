const express = require('express');
const router = express.Router();
const Agent = require('../models/Agent');
const Portfolio = require('../models/Portfolio');
const Cart = require('../models/Cart');

router.get('/', async (req, res) => {
    try {
        const rendelesek = await Cart.find()
            .sort({ createdAt: 'desc' })
            .populate('portfolio')
            .populate('agent');
        res.status(200).render('cart', { rendelesek });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem jó!' });
    }
});

router.get('/rendelesek', async (req, res) => {
    try {
        const rendelesek = await Cart.find()
            .populate('portfolio')
            .populate('agent');
        res.status(200).json(rendelesek);
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem jó!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { username, portfolioId, agentId } = req.body;
        const ugynok = await Agent.findOne({ _id: agentId });
        const portfi = await Portfolio.findOne({ _id: portfolioId });
        const newCart = new Cart({
            username,
            portfolio: portfi,
            agent: ugynok,
        });
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ msg: 'Valami félrement!' });
    }
});

router.post('/torol', async (req, res) => {
    const { id } = req.body;
    console.log(id);
    const userke = await Cart.findOneAndDelete({ _id: id });
    res.status(200).json(userke);
});

module.exports = router;
