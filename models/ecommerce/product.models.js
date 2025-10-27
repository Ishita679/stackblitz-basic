import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    description :{
        required:true,
        type:String,
            },
    name:{
        reportErrorequired:true,
        type:String,
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true,
    },
    ownership:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{timestamps:true})
export const product = moongose.model("Product",productSchema)