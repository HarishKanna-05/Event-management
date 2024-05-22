import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";
dotenv.config();
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use("/event", eventRoutes);

app.listen(PORT, async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
      console.log("connected to database!");
    })
    .catch((err) => {
      console.log(err);
    });
});
