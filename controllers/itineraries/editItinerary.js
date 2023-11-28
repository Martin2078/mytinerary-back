import Itinerary from "../../models/Itinerary.js";

export default async(req,res,next)=>{
    let itineraryEdit=await Itinerary.findById(req.params.id)

    if (req.body.photo) {
        itineraryEdit.photo=req.body.photo
    }
    if (req.body.title) {
        itineraryEdit.title=req.body.title
    }
    if (req.body.price) {
        itineraryEdit.price=req.body.price
    }
    if (req.body.duration) {
        itineraryEdit.duration=req.body.duration
    }
    if (req.body.hashtags) {
        itineraryEdit.hashtags=req.body.hashtags
    }
    if (req.body.activities) {
        itineraryEdit.activities=req.body.activities
    }
    await itineraryEdit.save()

    res.json({
        success:true,
        message:"Itinerary edited successfully!"
    })
}