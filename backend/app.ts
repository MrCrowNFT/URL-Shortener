import express from "express";
import urlRouter from "./routes/url.routes";

const app = express();
app.use(express.json());

app.use("/link", urlRouter);

export default app

