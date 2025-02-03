import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5500;

app.get("/", (req: Request, res: Response) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
