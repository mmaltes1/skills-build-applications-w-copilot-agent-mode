import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;
const MONGO_URI = "mongodb://127.0.0.1:27017/octofit_db";

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "octofit-tracker-backend" });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });
