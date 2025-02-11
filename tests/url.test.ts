import request from "supertest";
import app from "../backend/app";
import pool from "../backend/config/db";

describe("URL Shortener API", () => {
    it("should create a short URL", async () => {
        (pool.query as jest.Mock).mockResolvedValueOnce({
          rows: [{ original_url: "https://example.com", short_url: "abc123" }],
        });
    
        const response = await request(app).post("/link/shorten").send({
          originalUrl: "https://example.com",
        });
    
        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.short_url).toBe("abc123");
      });
});
