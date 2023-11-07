import User from "../../models/User.js";

export default async function (req, res, next) {
    try {

        const finded = await User.find({ email: req.query.email }).select('-password')
        if (!finded) {
            return res.status(200).json({
                success: true,
                message: 'User not Finded'
            })
        }
        return res.json({
            success: true,
            response: finded,
            message: 'User Finded'
        })
    } catch (error) {

    }
}

