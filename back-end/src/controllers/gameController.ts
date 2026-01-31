import { Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";

import dbPool from "../database/index.js";
import { DbGame, Game } from "../models/Game.js";

export async function readGames(req: Request, res: Response): Promise<void> {
  const query: QueryConfig = req.query.search
    ? {
        text:
          "SELECT * FROM games " +
          "WHERE LOWER(name) LIKE $1 OR $2 <% name " +
          "ORDER BY word_similarity($2, name) DESC",
        values: [`%${req.query.search}%`, req.query.search],
      }
    : {
        text: "SELECT * FROM games",
      };
  try {
    const dbRes: QueryResult<DbGame> = await dbPool.query(query);
    const games: Game[] = dbRes.rows.map((dbGame) => Game.fromDbGame(dbGame));

    res.status(200).json(games);
  } catch {
    res.sendStatus(500);
  }
}

console.log("test");
