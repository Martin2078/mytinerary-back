import City from "../../models/City.js";

export default async(req,res)=>{
    try {  

    let cities= await City.find().sort({popularity:1})

    return res.json({
        success:true,
        response:cities,
        message: "all cities"
    })   

    } catch (error) {
        return res.json({
            success:false,
            message:"error getting cities"
        })
    }
}

