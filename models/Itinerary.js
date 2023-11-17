import { model,Schema,Types } from "mongoose";

let collection='itineraries'
const itinerarySchema=new Schema({
    cityId:{type:Types.ObjectId,ref:'cities',required:true},
    userId:{type:Types.ObjectId,required:true,ref:'users'},
    photo:{type:String,required:true},
    title:{type:String,required:true},
    price:[{type:Number,required:true}],
    duration:{type:Number},
    hashtags:[{type:String,required:true}],
    activities:[{
        name:{type:String,required:true},
        description:{type:String,required:true},
        photo:[{type:String,required:true}],
        ubication:{type:String,required:true}
    }],
},{timestamps:true})

let Itinerary=model(collection,itinerarySchema)

export default Itinerary