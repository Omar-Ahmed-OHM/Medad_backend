import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnection from "./src/config/db.js";
import hadithRoutes from "./src/routes/hadith.routes.js";
import zekrRoutes from "./src/routes/zekr.routes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/hadith", hadithRoutes);
app.use("/api/zekr", zekrRoutes);

// 🔥 connect ONCE per request (safe for Vercel)
app.use(async (req, res, next) => {
  await dbConnection();
  next();
});

export default app;