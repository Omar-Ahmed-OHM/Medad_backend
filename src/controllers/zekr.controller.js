import Zekr from '../models/Zekr.js';
export const getZekrByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const zekr = await Zekr.find({ category });

        res.json(zekr);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const GetAllAzkar = async (req, res) => {
    try {
        const azkar = await Zekr.find();
            return res.status(200).json(azkar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};