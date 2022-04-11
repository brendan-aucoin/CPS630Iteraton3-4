const mongoose = require('mongoose');
const URL = 'mongodb+srv://dbuser:Test123!@cps630-iteration3-4.ah0lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectMongoose = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI || URL,{ useNewUrlParser: true,useUnifiedTopology: true });
 }
 
 module.exports = connectMongoose;