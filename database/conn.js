import mongoose from "mongoose";


export default async function connnect() {
  await mongoose.connect(process.env.ATLAS_URI)
  console.log("database connected")
}