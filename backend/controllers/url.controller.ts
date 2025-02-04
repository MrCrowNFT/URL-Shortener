import pool from "../config/db";
import { Request, Response } from "express";

//we'll use this interface to handle the dups error as for it to be any is not safe
interface PgError extends Error {
  code?: string;
}

export const createPair = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { originalUrl, shortUrl } = req.body;
    if (!originalUrl || !shortUrl) {
      res.status(400).json({
        success: false,
        message: "Original URL and short URL are required",
      });
    }

    // URL validation
    try {
      new URL(originalUrl);
    } catch {
      res.status(400).json({
        success: false,
        message: "Invalid original URL format",
      });
    }

    //Here i need a helper function to generate a random string

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
  } catch (error) {
    console.error("Error inserting URL pair:", error);

    //here we handle dups
    const pgError = error as PgError;
    if (pgError.code === "23505") {
      res.status(409).json({
        success: false,
        message: "Short URL already exists",
      });
    }

    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getOriginalUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { shortUrl } = req.body;
    if (!shortUrl) {
      res.status(400).json({
        success: false,
        message: "Short URL are required",
      });
    }
    const query = `
      SELECT original_url FROM urls
      WHERE short_url = $1;
      `;
    const values = [shortUrl];
    const result = await pool.query(query, values);
    res.status(201).json({
      success: true,
      message: "Url succesfully retrived",
      data: result.rows[0]?.original_url,
    });
  } catch (error) {
    console.error("Error retriving URL:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
