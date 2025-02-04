import pool from "../config/db";

export const createPair = async (original_url: string, shorten_url: string) => {
  const query = `
        INSERT INTO urls (original_url, short_url)
        VALUES ($1, $2)
        RETURNING *;
    `;
  const values = [original_url, shorten_url];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the inserted row
  } catch (error) {
    console.error("Error inserting URL pair:", error);
    throw new Error("Failed to create URL pair"); // Avoid exposing raw DB errors
  }
};
