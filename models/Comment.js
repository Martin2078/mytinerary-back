import { model,Schema, Types } from "mongoose";

let collection='comments'
const commentSchema=new Schema({
    itineraryId:{type:Types.ObjectId,required:true},
    userId:{type:Types.ObjectId,ref:'users',required:true},
    text:{type:String,required:true},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    photo:{type:String,required:false}
},{timestamps:true})

let Comment = model(collection,commentSchema)

export default Comment