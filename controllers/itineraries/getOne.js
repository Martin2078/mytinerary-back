import Itinerary from "../../models/Itinerary.js";

export default async (req,res)=>{
    let itinerary=await Itinerary.findById(req.params.id).populate('userId')
    
    return res.json({
        success:true,
        response:itinerary
    })
}