import express from "express";
import urlRouter from "./routes/url.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/link", urlRouter);

export default app;
