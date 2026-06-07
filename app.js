import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import dbconnenction from './src/config/db.js';
import hadithRoutes from './src/routes/hadith.routes.js';
import zekrRoutes from './src/routes/zekr.routes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/hadith', hadithRoutes);
app.use('/api/zekr', zekrRoutes);

const PORT = process.env.PORT || 5000;

dbconnenction()
  .then(() => {})
  .catch((err) => console.error("DB connection failed:", err));

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;