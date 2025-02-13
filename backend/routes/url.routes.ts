import express from "express";
import { createPair, getOriginalUrl } from "../controllers/url.controller";


const urlRouter = express.Router();


urlRouter.post("/shorten", createPair);
urlRouter.get("/:shortUrl", getOriginalUrl);

export default urlRouter;
