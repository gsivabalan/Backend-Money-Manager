const mongoose = require('mongoose')
const transectionSchema = new mongoose.Schema({
    userid:{
        type: String,
        required:true,
        },
    amount: {
        type: Number,
        required: [true, 'amount is requird']
    },
    type:{
        type:String,
        required:[true,'type is required']

        },
    category: {
        type: String,
        requires: [true, 'cate is requires ']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'desc is required']
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    }
}, { timestamps: true, collection:'transections' })

const transectionModel = mongoose.model('transections', transectionSchema)

module.exports= transectionModel;