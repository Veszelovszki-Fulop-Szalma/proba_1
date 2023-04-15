const mongoose = require('mongoose');
const Agent = require('./Agent');
const Portfolio = require('./Portfolio');

const appointmentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        agent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'agent',
        },
        portfolio: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'portfolio',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('appointment', appointmentSchema);
