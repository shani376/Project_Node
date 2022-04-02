const mongoose = require('mongoose');

const losses = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    lossesDate:{
        type:Date,
        required: true
    },
    descriptionText: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Losses = mongoose.model('Losses', losses);
module.exports = Losses;