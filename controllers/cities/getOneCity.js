import City from "../../models/City.js";

export default async (req, res) => {
    try {
        let { id } = req.params
        let city = await City.findById(id)
        city.popularity=city.popularity+1
        await city.save()
        
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

