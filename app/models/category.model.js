const mongoose = require('mongoose');

const category = new mongoose.Schema({
    categoryName: {
        type: String,
    },
    subCategoriesRef: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory'
    }]
});

const Category = mongoose.model('Category', category);
module.exports = Category;