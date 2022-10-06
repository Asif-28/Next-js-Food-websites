import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://asifali:asifali12@foodapp.2ccswdo.mongodb.net/?retryWrites=true&w=majority"
  );

export default connectMongo;
//mongodb+srv://asif:<password>@foodapp.2ccswdo.mongodb.net/?retryWrites=true&w=majority
