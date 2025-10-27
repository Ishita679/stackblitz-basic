import mongoose  from "mongoose";
const orderItemSchema = new mongoose.Schema({

},{timestamps:true})
const orderSchema = new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        default:1,
        type:[],
        required:true,
    }
},{timestamps:true})
export const Order = mongoose.model("Order", orderSchema)