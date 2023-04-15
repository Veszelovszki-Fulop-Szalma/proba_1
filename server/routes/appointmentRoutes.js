const express = require('express');
const Appointment = require('../models/Appointment');
const Agent = require('../models/Agent');
const Portfolio = require('../models/Portfolio');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('agent')
            .populate('portfolio');
        const agents = await Agent.find();
        const portfolios = await Portfolio.find();
        res.status(200).render('appointment', {
            appointments,
            agents,
            portfolios,
        });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.get('/rendelesek', async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('agent')
            .populate('portfolio');
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem sikerült!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { username, selectedDate, id, portfolioId } = req.body;
        console.log({ username, selectedDate, id, portfolioId });
        const selectedAgent = await Agent.findOne({ _id: id });
        const selectedPortfolio = await Portfolio.findOne({ _id: portfolioId });
        const newAppointment = new Appointment({
            username,
            time: selectedDate,
            agent: selectedAgent,
            portfolio: selectedPortfolio,
        });
        await newAppointment.save();
        res.status(201).json({ msg: newAppointment });
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

router.post('/torol', async (req, res) => {
    try {
        const { id } = req.body;
        const appi = await Appointment.findOneAndDelete({
            _id: id,
        });
        res.status(200).json(appi);
    } catch (error) {
        res.status(500).json({ msg: 'Valami hiba történt!' });
    }
});

module.exports = router;
