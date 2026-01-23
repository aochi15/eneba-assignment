import express from "express";

import { readGames } from "../controllers/gameController.js";

const router = express.Router();

router.get("/", readGames);

export default router;
