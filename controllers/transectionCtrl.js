const transectionModel = require("../models/transectionModel");
const moment =require('moment');

const getAllTransection= async (req,res)=>{
    try {
        const {filter} =req.body
        let params={};
        if(!isNaN (filter)) {
params['date']={
    $lte : moment().subtract(Number(filter),'d').toDate()
}
        }
        if(req.body.userid){
            params['userid']=req.body.userid
        }
        console.log(params);
        const transection =await transectionModel.find(params);
        res.status(200).json(transection);

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

const editTransection=async(req,res)=>{
    try{
        await transectionModel.findOneAndUpdate(
            {_id:req.body.transactionid},
            req.body.payload
        );
        res.status(200).send("Edit Successfully");
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};
 
const addTransection= async (req,res)=> {
try {
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
} catch (err){
    console.log(err);
    res.status(500).json(err);
}
};

const deleteTransection=async(req,res)=>{
try{
    await transectionModel.findOneAndDelete(
        {_id:req.body.transactionid} );
    res.status(200).send("Delete Successfully");
}catch(err){
    console.log(err);
    res.status(500).json(err);
}
};

module.exports={getAllTransection,addTransection,editTransection,deleteTransection};