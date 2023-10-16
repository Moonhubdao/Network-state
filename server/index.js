import express from "express";
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./libs/connect.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Cross Origin Resource Sharing
app.use(cors());

// built-in middleware for json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for cookies
app.use(cookieParser());

const PORT = process.env.PORT;

// routes
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Welcome to MoonHubDAO API");
});

app.listen(PORT, async () => {
  console.log(
    colors.yellow.underline(`Server listening at http://localhost:${PORT}`)
  );

  await connectDB();
});
