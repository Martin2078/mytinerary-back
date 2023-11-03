import { model,Schema } from "mongoose";

let collection = 'users'
const userSchema = new Schema({
    name: {type:String, required: true},
    surname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    photo:{type:String,required:false},
    role:{type: Number,default:0},
},{timestamps:true})

const User = model(collection,userSchema)

export default User