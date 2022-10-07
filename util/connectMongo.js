import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URL);

export default connectMongo;
//mongodb+srv://asif:<password>@foodapp.2ccswdo.mongodb.net/?retryWrites=true&w=majority
