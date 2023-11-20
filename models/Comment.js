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
    likes:[{type:Types.ObjectId}],
    dislikes:[{type:Types.ObjectId}],
    photo:[{type:String,required:false}],
},{timestamps:true})

let Comment = model(collection,commentSchema)

export default Comment