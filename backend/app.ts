import express, { Request, Response } from "express";
import urlRouter from "./routes/url.routes";

const app = express();
app.use(express.json());

app.use("/link", urlRouter);

export default app


import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5500;


app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
