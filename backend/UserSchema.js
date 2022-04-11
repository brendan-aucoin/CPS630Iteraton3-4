const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    isAdmin: Boolean,
});

module.exports = UsersModel = mongoose.model('Users',UsersSchema);