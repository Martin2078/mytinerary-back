import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next)=>{

    const userItineraries=await Itinerary.find({userId:req.params.id}).populate('cityId')

    return res.json({
        success:true,
        response:userItineraries,
        message:'All Itineraries'
    })

}