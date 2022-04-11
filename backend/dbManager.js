const ItemModel = require('./MongoSchema')
// requires an object with a name, price,color,path,team,
const addRecord = async (record)=>{
    const newRecord = new ItemModel(record);
   await newRecord.save((err,record) =>{
        if(err) {return err}
        console.log(record.name + " Was Saved");
    })
}

//deletes one record based on the id you pass in. you would probably wanna call this with the req.id inside one of ur routes
//pass in the id object itself (the one u get from the record) or u can use a string as the id
const deleteRecord = async(id) =>{
    await ItemModel.deleteOne({_id: id});
}

const deleteRecordByName = async(name) =>{
    await ItemModel.deleteOne({name: name});
}

const updateRecord = async(recordId,targetProperty,targetValue) => {
    const record = await ItemModel.findOneAndUpdate(
        { _id: recordId },
        { [targetProperty]: targetValue },
        { new: true }
      );
}


module.exports = {
    addRecord,
    updateRecord,
    deleteRecord,
    deleteRecordByName
}