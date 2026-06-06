import express from 'express';
import dbconnenction from './src/config/db.js';
import dotenv from 'dotenv';
import hadithRoutes from './src/routes/hadith.routes.js';
import zekrRoutes from './src/routes/zekr.routes.js';
import cors from "cors";
///////////////////////////
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
dotenv.config();
dbconnenction();
const PORT = process.env.PORT || 5000;
app.use('/api/hadith', hadithRoutes);
app.use('/api/zekr', zekrRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

