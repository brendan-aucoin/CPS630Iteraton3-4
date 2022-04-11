const path = require('path');
const cors = require('cors');
const express = require('express');
// import express from 'express';
// const data = require('./data');
const connectToMongo = require('./dbConnect');
const ItemModel = require('./MongoSchema')
const app = express();
const {addRecord,updateRecord,deleteRecord,deleteRecordByName }  = require('./dbManager');
//test
// Basically sending data to backend http://localhost:5050/api/items
//We are using api functions to get access to the data in the backend

connectToMongo();

app.get('/api',(req,res)=>{
    res.send("DOGS");
    

});
app.get('/api/items', (req, res) => {
    ItemModel.find({},(err,data)=>{
        if(err){throw err}
        res.send(data);
    })
});


const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log('serve at http://localhost:' + port);
});

