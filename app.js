import express from "express";
import mongoose from "mongoose";
import routes from "./src/Routes/index.js";

const app = express();

const uri = `mongodb+srv://nhut03:123@cluster0.cm7cwus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json());
app.use("/", routes);
mongoose
  .connect(uri)
  .then(() => console.log("Connected to database successfully"))
  .catch((error) => console.error("Database connection failed", error));

// Start the server
app.listen(6000, () => {
  console.log(`Server is running on port 6000`);
});
