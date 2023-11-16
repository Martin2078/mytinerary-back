import { model,Schema, Types } from "mongoose";

let collection='comments'
const commentSchema=new Schema({
    itineraryId:{type:Types.ObjectId,required:true},
    userId:{type:Types.ObjectId,ref:'users',required:true},
    title:{type:String,required:true},
    text:{type:String,required:true},
    valoration:{
        value:{type:Number,required:true},
        textValue:{type:String,required:true}
    },
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    photo:[{type:String,required:false}],
    comments:[{type:Types.ObjectId,ref:'comments'}]
},{timestamps:true})

let Comment = model(collection,commentSchema)

export default Comment