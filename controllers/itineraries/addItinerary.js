import Itinerary from "../../models/Itinerary.js";

export default async (req,res)=>{
    try {
        const {title,price,activities,photo,duration,hashtags,cityId,userId}=req.body
        await Itinerary.create({
            title,
            price,
            activities,
            photo,
            duration,
            hashtags,
            cityId,
            userId
        })

        return res.json({
            success:true,
            message: 'Itinerary Created!'
        })
    } catch (error) {
        
    }
}