# URL-Shortener

Takes user link input and returns a shorten url form that redirects to the link, the link and the shorten form pair are stored on the database and accessed when the user call the shorten link and is redirected to the original url

## Tech stack

Uses Node js, Typescript and Express js for the REST API backend, as well as a PosgreSQL database for storing the pairs. For the frontend, it uses React js, Typescript and Tailwind css, also React Query + Axios for the API calls. Test suit made with Jest, test coverage = 97%.

## SQL table:

```sql
    id SERIAL PRIMARY KEY,
    original_url TEXT NOT NULL,
    short_url TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
```
