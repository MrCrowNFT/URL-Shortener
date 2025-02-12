import request from "supertest";
import app from "../backend/app";
import pool from "../backend/config/db";

// mock the pool object
jest.mock("../backend/config/db", () => ({
  query: jest.fn(),
}));

interface PgError extends Error {
  code?: string;
}

describe("URL Shortener API", () => {
  afterEach(() => {
    jest.clearAllMocks(); // reset mocks after each test
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
  it("should return 400 if originalUrl is missing", async () => {
    const response = await request(app).post("/link/shorten").send({}); // no url provided

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      "Original URL and short URL are required"
    );
  });
  it("should return 400 if originalUrl is invalid", async () => {
    const response = await request(app)
      .post("/link/shorten")
      .send({ originalUrl: "invalid-url" }); // Invalid URL

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Invalid URL format");
  });
  it("should return 409 if short URL already exists", async () => {
    // mock the pool.query method to simulate a duplicate short URL error
    const pgError = new Error("Duplicate short URL") as PgError;
    pgError.code = "23505"; // postgres error code for unique violation

    (pool.query as jest.Mock).mockRejectedValueOnce(pgError);

    const response = await request(app).post("/link/shorten").send({
      originalUrl: "https://example.com",
    });

    expect(response.status).toBe(409);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Short URL already exists");
  });
  it("should return 500 if a server error occurs", async () => {
    (pool.query as jest.Mock).mockRejectedValueOnce(
      new Error("Database error")
    );

    const response = await request(app).post("/link/shorten").send({
      originalUrl: "https://example.com",
    });

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Server error");
  });
});

describe("Get original URL", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should redirect to the original URL if the short URL exists", async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({
      rows: [{ original_url: "https://example.com" }],
    });

    const response = await request(app).get("/link/abc123");

    expect(response.status).toBe(302); // 302 is the status code for redirect
    expect(response.header.location).toBe("https://example.com");
  });

  it("should return 404 if the short URL does not exist", async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

    const response = await request(app).get("/link/nonexistent");

    expect(response.status).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Short URL not found");
  });
});
