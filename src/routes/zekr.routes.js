import  express from 'express';
import { GetAllAzkar, getZekrByCategory } from '../controllers/zekr.controller.js';
const router = express.Router();
router.get('/GetAzkar', GetAllAzkar);
router.get("/morning", (req, res) => {
    req.params.category = "morning";
    return getZekrByCategory(req, res);
});

router.get("/evening", (req, res) => {
    req.params.category = "evening";
    return getZekrByCategory(req, res);
});
export default router;  