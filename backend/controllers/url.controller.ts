import pool from "../config/db";
import { Request, Response } from "express";

export const createPair = async (req: Request, res: Response) => {
  try {
    const { originalUrl, shortUrl } = req.body;
    if (!originalUrl || !shortUrl) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Original URL and short URL are required",
        });
    }

    const query = `
        INSERT INTO urls (original_url, short_url)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [originalUrl, shortUrl];

    const result = await pool.query(query, values);
    // Return the inserted row so we can return it to the user
    res.status(201).json({
      success: true,
      message: "Pair successfully created",
      data: result.rows[0],
    });
  } catch (error){
    console.error("Error inserting URL pair:", error);

    // Handle unique constraint violation (duplicate short URL)
    if (error.code === "23505") {
        return res.status(409).json({
          success: false,
          message: "Short URL already exists",
        });
      }

    res.status(500).json({ success: false, message: "Server error" });
  }
};
