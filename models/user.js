const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    facebook: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    fullname: {
        type: String
    },
    image: {
        type: String,
        default: '/img/user.png'
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    online: {
        type: Boolean,
        default: false
    },
    wallet: {
        type: Number,
        default: 0
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
