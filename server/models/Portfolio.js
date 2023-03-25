const mongoose = require('mongoose');
const Agent = require('./Agent');

const portfolioSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        result: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        agent: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'agent',
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('portfolio', portfolioSchema);
