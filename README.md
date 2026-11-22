# Rapo Cloud Kitchen — Cloud Kitchen Demo Storefront

An original, responsive e-commerce-style **demo** for Rapo Cloud Kitchen in Hyderabad, with rice specials and South Indian breakfast. Prepared for the `my-rapocloud-kitchen` GitHub Pages repository.

## Upload all files to your existing GitHub repository

1. Download the ZIP and **extract** it.
2. Open the extracted `my-rapocloud-kitchen-upgraded` folder.
3. In GitHub open your existing `my-rapocloud-kitchen` repository → **Add file → Upload files**.
4. Upload **the contents** of the folder (all HTML, CSS, JS files and the `images` folder). Don't upload the ZIP itself or create an extra nested folder.
5. Confirm `index.html` is in the repository root, commit, then check **Settings → Pages → Deploy from a branch → main / (root)**. If Pages was already enabled, GitHub will redeploy.
6. Open the Pages URL shown in GitHub's **Settings → Pages**. Avoid guessing the exact URL.

### Pages

- `index.html` — home, hero, featured menu and categories
- `products.html` — category-filtered catalogue
- `product.html?id=white-rice` — detail, live-in-browser stock, quantity and add to cart
- `cart.html` — basket and quantity changes
- `checkout.html` — **demo only**, validates sample information and creates a local test order
- `tracking.html` — **demo only**, tracks an ID in the same browser
- `admin.html` — **demo only**, changes a product's daily stock and order status in the same browser

`style.css` contains the original styling; `data.js` holds demo products/prices/default daily stock; `base.js` manages browser-only state; `app.js` implements page interactions. Product and hero photos use remote Wikimedia Commons image links; credits are in `PHOTO_CREDITS.md`. A network connection is needed to display them.

### Edit food details

Open `data.js` in GitHub → pencil **Edit** → update name, `price`, `description`, `stock`, category and other menu details. Commit changes to publish. Only use photos you own or have permission to use if replacing illustrations.

## What works (in ONE browser only)

- Menu navigation, category filters and individual product pages.
- Add to cart, update quantity, subtotal and form validation.
- Set each product's **daily quantity** to 10, 15, 20 or any supported number.
- Demo sold-out indicators and stock reduction after demo checkout.
- Demo order IDs and progress statuses controlled from the admin page.
- Stock defaults reset automatically as the browser's local date changes.

## What is NOT ready for real use

**This is a prototype, not a production ordering system.** Data uses `localStorage`, so every browser has separate orders and inventory. It is not secure, synchronised, backed up or capable of preventing overselling between customers. `admin.html` is a public, unprotected demo. No payment gateway, real payment collection, customer notification, shipping service, order database, authentic user account, invoice, tax calculation or delivery partner integration is present. Do not accept real orders, collect sensitive customer details or use real credentials with this version.

## Production launch checklist

- [ ] Add a shared database, e.g. Supabase/Postgres, and public-read/admin-write permission rules.
- [ ] Authenticate admins using proper identity provider and server-side authorization; remove or protect the public demo dashboard.
- [ ] Implement server-side order reservation with transactions and TTL for unpaid orders (do not trust browser prices or stock).
- [ ] Integrate Razorpay Checkout (or another approved Indian payment provider). Create payment orders server-side, validate signatures **server-side**, and use verified provider webhooks to confirm payments before final stock deduction and order confirmation.
- [ ] Add customer-safe order links or login, and avoid publicly guessable tracking IDs with personal details.
- [ ] Add delivery zones, address validation, charges, operational hours, delivery/pickup logic, refund/cancellation policies, order notifications, taxes and support contacts.
- [ ] Set up secure environment variables, server logs, backups, monitoring, rate limits and fraud prevention.
- [ ] Replace sample prices, descriptions and illustrative photos with your own verified food information and product photography.
- [ ] Complete relevant FSSAI and local requirements before operating.

GitHub Pages is static hosting; it cannot securely process payment verification or centralised inventory itself. A backend is required.

## Rapo Cloud Kitchen menu

- Steamed White Rice — **700 g**
- Sambar Rice, Lemon Rice, Curd Rice
- Idli with Sambar, Plain Dosa

All prices are editable **sample values**, not confirmed business pricing. Edit `data.js` to change descriptions, prices, product photos or stock defaults. The browser demo resets daily stock by each visitor’s local date; it does not synchronize among devices.

## Photo credits

See `PHOTO_CREDITS.md`. The sample real food photos load from Wikimedia Commons and may fail if external image loading is blocked. Before using commercially, replace with your own photos or satisfy the individual Commons licences.
