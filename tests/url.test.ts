import request from "supertest";
import app from "../backend/app";
import pool from "../backend/config/db";

// Mock the pool object
jest.mock("../backend/config/db", () => ({
  query: jest.fn(),
}));

describe("URL Shortener API", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });
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

    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO urls"),
      expect.arrayContaining(["https://example.com", expect.any(String)]) 
    );
  });
});
