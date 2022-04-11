const path = require('path');
const cors = require('cors');
const express = require('express');
// import express from 'express';
// const data = require('./data');
const connectToMongo = require('./dbConnect');
const ItemModel = require('./MongoSchema');
const UsersModel = require('./userSchema');
const bodyParser = require('body-parser');

const {addRecord,updateRecord,deleteRecord,deleteRecordByName }  = require('./dbManager');
const e = require('cors');
//test
// Basically sending data to backend http://localhost:5050/api/items
//We are using api functions to get access to the data in the backend

const app = express();
app.use(bodyParser.json());
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

app.get('/api/item/:id', (req, res) => {
    console.log(req);
});
app.post('/api/create-user',(req,res)=>{
    const {name,email,password,isAdmin} = req.body;
    const newRecord = new UsersModel({name,email,password,isAdmin});
   newRecord.save((err,record) =>{
        if(err) {return err}
        console.log(record.name + " Was Saved");
    })
});

app.post('/api/login-user',(req,res)=>{
    UsersModel.find({email:req.body.email,password:req.body.password}, (err,data)=>{
        if(err){throw err;}
        const isAdmin = data[0] ? data[0].isAdmin : false
        if(data[0]){
            res.send({
                message: "OK",
                isAdmin: isAdmin
            });
        }
        else{
            res.send({
                message:"BAD",
                isAdmin:isAdmin
            })
        }
       
    })
});



const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log('serve at http://localhost:' + port);
});

