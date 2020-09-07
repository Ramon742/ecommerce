const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    options: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('item', ItemSchema);