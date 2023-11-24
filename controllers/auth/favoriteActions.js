import User from "../../models/User.js";

async function addFavorite(req,res,next) {
    let userFinded=await User.findById(req.user._id)
    userFinded.favorites.push(req.params.id)
    userFinded.populate('favorites')
    await userFinded.save()
    return res.json({
        success:true,
        message:'Itinerary saved',
        response:userFinded.favorites
    })

}

async function deleteFavorite(req,res,next) {
    let userFinded=await User.findById(req.user._id)
    userFinded.favorites=userFinded.favorites.filter((favorite)=>favorite!=req.params.id)
    userFinded.populate('favorites')
    await userFinded.save()
    return res.json({
        success:true,
        message:'Itinerary unSaved',
        response:userFinded.favorites
    })
}

const favoriteActions={addFavorite,deleteFavorite}

export default favoriteActions