import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next)=>{

    const itineraries=await Itinerary.find({cityId:req.params.id}).populate("comments")

    return res.json({
        success:true,
        response:itineraries,
        message:'All Itineraries'
    })

}