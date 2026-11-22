# My Cloud Kitchen — Beginner Demo

A static HTML/CSS/JavaScript demonstration of a cloud kitchen menu, cart, daily stock controls, and order status.

## Files
- `index.html` — food menu, cart, demo order form
- `style.css` — styling
- `script.js` — demo-only browser state
- `admin.html` — demo quantity and order status settings
- `tracking.html` — demo order tracking
- `images/` — reserved for your food photos

## Run
Open `index.html` in a browser, or publish the static files to GitHub Pages / Cloudflare Pages.

## CRITICAL: Not production ready
- All data lives in **localStorage in the visitor's browser**, not a central database. Stock and orders are **not shared across devices**, and data can be changed or erased.
- The admin page has **no authentication** and is open to anyone who knows the URL.
- **No real online payments, notifications, delivery tracking, secure orders, or server-side validation** are implemented.
- Phone/name fields are demonstration inputs, not collected by a server.

To go live: implement a secure backend with authenticated admin, database transactions/stock reservations, verified payment webhooks, and customer tracking links without exposing private details.
