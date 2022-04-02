const mongoose = require('mongoose');

const user = new mongoose.Schema({
    idUser: {
        type: Number,
        required: false
    },
    nameUser: {
        type: String,
        minlength: 2
    },
    emailUser: {
        type: String,
        minlength: 10
    },
    passwordUser: {
        type: String,
        required: true
    },
    // lastEntrenceUser: {
    //     type: Date,
    //     required: true
    // },
    phoneUser: {
        type: String,
        minlength: 9
    }

});

const User = mongoose.model('User', user);
module.exports = User;