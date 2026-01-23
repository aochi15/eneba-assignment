import cors from "cors";
import express, { Express } from "express";

import gameRoutes from "./routes/gameRoutes.js";
import notFoundRoutes from "./routes/notFoundRoutes.js";

const app: Express = express();
const port: number = Number(process.env.PORT);
const API_PREFIX: string = "api";

app.use(cors());
app.use(express.static("public"));
app.use(`/${API_PREFIX}/games`, gameRoutes);
app.use(notFoundRoutes);
app.listen(port, () => console.log(`Listening on port ${port}`));
