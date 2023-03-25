const mongoose = require('mongoose');
const Portfolio = require('./Portfolio');
const Agent = require('./Agent');

const cartSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        portfolio: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'portfolio',
        },
        agent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'agent',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart', cartSchema);
