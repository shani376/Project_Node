const mongoose = require('mongoose');

const subCategory = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3
    },
    categorySuper: {
        type: mongoose.Schema.Types.ObjectId, ref:'Category'
    }
});

const SubCategory = mongoose.model('SubCategory', subCategory);
module.exports = SubCategory;