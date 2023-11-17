import express from "express";
import colors from "colors";
import connectDB from "./connection/db.js";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./route/auth.js"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;


connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/",auth);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
