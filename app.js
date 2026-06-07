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
app.get("/", (req, res) => {
  res.send("Backend Running");
});
const startServer = async () => {
  try {
    await dbconnenction();

   app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
  } catch (err) {
    console.error("DB connection failed:", err);
  }
};

startServer();