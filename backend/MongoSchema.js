const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    league:String,
    path: String,
    team: String
});

module.exports = ItemModel = mongoose.model('Items',ItemSchema);