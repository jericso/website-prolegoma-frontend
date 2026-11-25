# Prolegoma Website

This is the live version of the [development site](https://dev.prolegoma.com).

## Development

1. `npm ci`
2. Copy `.env.example` to `.env` and set `VITE_MAP_API_KEY`.
3. Run the backend on `http://localhost:3003` (Vite proxies `/api` to it).
4. `npm run dev`

`VITE_*` variables are embedded in the built JavaScript, so the Google Maps key is
public. In Google Cloud, restrict it to the site's HTTP referrers (e.g.
`*.prolegoma.com/*`) and to the Maps JavaScript API only.
