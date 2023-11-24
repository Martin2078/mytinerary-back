import City from "../../models/City.js";

export default async (req, res) => {
    try {
        let { id } = req.params
        let city = await City.findByIdAndUpdate(id,{
            popularity:popularity+1
        },{new:true})
        return res.json({
            success: true,
            response: city,
            message: "one City"
        })

    } catch (error) {
        return res.json({
            success: false,
            message: "error getting cities"
        })
    }
}

