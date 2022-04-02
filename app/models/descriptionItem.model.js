const mongoose = require('mongoose');

const descriptionItem = new mongoose.Schema({
    materialItem: {
        type: String,
    },
    colorItem: {
        type: String,
    },
    companyItem: {
        type: String,
    },
    sizeItem: {
        type: String,
    },
    dateOfFoundLoss: {
        type: Date,
    },
    descriptionText: {
        type: String,
    }
});

const DescriptionItem = mongoose.model('DescriptionItem', descriptionItem);
module.exports = DescriptionItem;