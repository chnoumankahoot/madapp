const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
        match: /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/
    },
    password: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    shopAddress: {
        type: String,
        required: true
    },
}, { timestamps: true });
const UserInformation = mongoose.model('UserInformation', userSchema);
module.exports = UserInformation;