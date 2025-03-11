import express from "express";
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";

const app = express();
connectDb();
app.use(express.json());
app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
