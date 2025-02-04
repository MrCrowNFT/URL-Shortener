import express, { Request, Response } from "express";
import urlRouter from "./routes/url.routes";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5500;

app.use("/pair", urlRouter);


app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
