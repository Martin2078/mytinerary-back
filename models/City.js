import { Schema, model } from "mongoose";

let collection='cities'
let CitySchema= new Schema({
    cityName:{type:String,required:true},
    country:{type:String,required:true},
    photo:[{type:String,required:true}],
    popularity:{type:Number,default:0},
    description:{type:String,required:true}
},{timestamps:true})

const City=model(collection,CitySchema)

export default City