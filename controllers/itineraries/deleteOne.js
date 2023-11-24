import Itinerary from "../../models/Itinerary.js";

export default async(req,res)=>{
    await Itinerary.findByIdAndDelete(req.params.id)

    return res.json({
        success:true,
        message:"Itinerary deleted!"
    })
}