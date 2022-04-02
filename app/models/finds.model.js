const mongoose = require('mongoose');

const finds = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    descriptionText: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    lossesDate:{
        type:Date,
        required: true
    },
});

const Finds = mongoose.model('Finds', finds);
module.exports = Finds;