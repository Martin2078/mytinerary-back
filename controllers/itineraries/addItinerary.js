import Itinerary from "../../models/Itinerary.js";

export default async (req,res)=>{
    try {
        
        const {title,price,activities,photo,duration,hashtags,cityId,userId}=req.body
        console.log(title);
        console.log(price);
        console.log(activities);
        console.log(photo);
        console.log(duration);
        console.log(hashtags);
        console.log(cityId);
        console.log(userId);

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
        console.log("si");
        return res.json({
            success:true,
            message: 'Itinerary Created!'
        })
    } catch (error) {
        
    }
}