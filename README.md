# Care Pharmacy (Saawaliya Medicohub) website

Vite + React.

## Run it
```
npm install
npm run dev
```
Open the address shown in the terminal (usually http://localhost:5173).

## Build for hosting
```
npm run build
```
Upload the `dist/` folder to any host (Netlify, Vercel, Cloudflare Pages, or your own server).
Configure the host to serve `index.html` for application routes so direct visits and refreshes work for `/about`, `/contact`, `/terms-and-conditions`, and `/privacy-policy`.

## Change shop details
Edit `src/config.js` (address, phone, WhatsApp number, hours).
Edit page text and medicine/FMCG product sections in `src/App.jsx`. Product photos are stored locally in `src/assets/products/`.
