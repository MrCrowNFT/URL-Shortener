# URL-Shortener

## SQL table (not yet created):
```sql
CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    original_url TEXT NOT NULL,
    short_url TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);
```