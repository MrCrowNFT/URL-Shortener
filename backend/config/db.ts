import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Create a new Pool instance (connection pool)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"), // PostgreSQL port (default is 5432)
});

export default pool;
