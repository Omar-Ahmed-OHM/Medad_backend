import express from 'express';
import { getAllHadith, searchHadith } from '../controllers/hadith.controller.js';
const router = express.Router();

router.get('/', getAllHadith);
router.get('/search', searchHadith);
export default router;