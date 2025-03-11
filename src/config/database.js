import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  const Uri = process.env.DATABASE_URI;

  try {
    console.log("DB CONNECTED");
    await mongoose.connect(Uri);
  } catch (e) {
    console.log(e.message);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
