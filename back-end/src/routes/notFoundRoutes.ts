import express from "express";

const router = express.Router();

router.use((_req, res) => res.sendStatus(404));

export default router;
