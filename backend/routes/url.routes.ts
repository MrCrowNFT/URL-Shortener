import express from "express";
import { createPair } from "../controllers/url.controller";

const urlRouter = express.Router();


urlRouter.post("/new", createPair);

export default urlRouter;
