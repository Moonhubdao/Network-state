import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(
      colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(colors.red.underline("Failed to connect to MongoDB"));
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
