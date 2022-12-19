import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Dhian:f34cc852b@cluster0.e6hre9q.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;