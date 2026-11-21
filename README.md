# A Little Christmas Surprise 🎄✨

A beautiful, responsive, enchanted Christmas + Harry Potter themed website created for Mehak.

Designed to be shared via a QR code attached to a Christmas / birthday gift.

---

## 🌟 Features

- **6 Story-Like Cards**: Matches the exact narrative flow:
  1. **Welcome** — Warm, magical start with Hogwarts silhouette, glowing lantern, and enchanted wax seal.
  2. **What I Notice** — Staggered list highlighting her love for Harry Potter, excitement about little things, easy conversations, and who she is.
  3. **My Feelings** — Sincere, warm confession banner with gentle candlelit atmosphere.
  4. **What I Want** — Sorting Hat and antique spellbook scene expressing the wish to get to know her better.
  5. **The Invitation** — Festive Christmas wish for a Christmas movie date with hot cocoa and fairy lights.
  6. **Her Reply** — Zero-pressure note box with quick response chips and form delivery.
- **Enchanted Music Box (Web Audio API)**: Zero audio assets needed. Synthesizes a crystalline music-box melody reminiscent of winter chimes.
- **Lightweight 60fps Snowfall & Magic Particles**: Compositor-friendly smooth particle canvas.
- **Mobile First & Fully Responsive**: Optimized for phones (QR code scanning), tablets, and desktop.
- **Touch Swipe & Keyboard Friendly**: Swipe left/right on mobile or use arrow keys / space on desktop.
- **Respects Accessibility**: Honors `prefers-reduced-motion` settings.

---

## 🛠️ Quick Customization (`js/config.js`)

All messages, names, dates, and form endpoints can be easily edited in `js/config.js` without touching HTML or CSS:

```javascript
const CONFIG = {
  recipientName: "Mehak",
  proposedDate: "December 20, 2026",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // Optional
  // ... customize any screen text!
};
```

---

## 📬 Receiving Her Note (Form Setup)

By default, any note she submits is saved locally in her browser's `localStorage` as a fail-safe. To receive her reply straight to your email:

1. Create a free account at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Create a new form and copy the endpoint URL.
3. Paste the URL into `CONFIG.formEndpoint` inside `js/config.js`:
   ```javascript
   formEndpoint: "https://formspree.io/f/your_form_id",
   ```
4. Test the form by submitting a message on Screen 6.

---

## 🚀 How to Preview & Deploy

### Local Preview
Open `index.html` directly in any web browser, or run a simple local web server:
```bash
# In this directory:
npx serve .
# or
python -m http.server 8000
```

### Free Deployment (Cloudflare Pages / GitHub Pages / Vercel)
Because this is 100% vanilla HTML, CSS, and JS with zero build steps:
1. **Cloudflare Pages**: Drag and drop the `christmas-surprise` folder into Cloudflare Pages.
2. **GitHub Pages**: Push this repository to GitHub and enable Pages in repository settings.
3. Generate a QR code for your public URL and attach it to the gift! 🎁
