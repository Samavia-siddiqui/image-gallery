# WildLens — Nature & Wildlife Gallery

A sleek, dark + neon image gallery showcasing nature and wildlife photography. Built with pure HTML, CSS and JavaScript, WildLens is lightweight, accessible, and easy to customize — perfect as a portfolio piece or visual component to drop into any static site.

---

✨ Features

- Dark / Neon theme with glowing UI
- Category filter (Forest, Ocean, Wildlife, Sky)
- Masonry-like responsive grid layout
- Lightbox viewer with keyboard navigation (Esc, ←, →)
- Lazy-loaded images for better performance
- Fully responsive across all devices

Every hover, every transition, every filter — crafted with pure JavaScript. This project pushed my DOM skills to a whole new level! 🔥

---

🛠️ Tech Stack

HTML5 · CSS3 · Vanilla JavaScript · DOM Manipulation

---

## Demo

Open `index.html` in your browser to view the gallery locally.

Tip: To serve locally with a static server:

```bash
# Using Node.js 'serve' (install once)
# npm install -g serve
# serve .

# Or using Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## Files

- `index.html` — markup and image items
- `style.css` — visual styling, variables for easy theming
- `script.js` — filter and lightbox logic

---

## Customize

- Add or edit images: open `index.html` and add/remove `<div class="gallery-item" data-category="...">` blocks. Keep the `data-src`, `data-title`, and `data-cat` attributes on the `View` button so the lightbox works.

- Change categories: update the filter buttons in the header and the `data-category` attributes on gallery items.

- Theme tweaks: modify color tokens at the top of `style.css` (`:root`) to change accent colors, radius, and spacing.

---

## Accessibility & Performance

- Images use `loading="lazy"` to defer off-screen images.
- Lightbox supports keyboard navigation and has ARIA attributes for the dialog.
- Respect `prefers-reduced-motion` for users who opt out of animations.

---

## Contributing

Feel free to open issues or submit pull requests. Ideas:

- Add image captions and author attribution
- Add animated transitions (respecting prefers-reduced-motion)
- Add pagination or infinite scroll for large galleries

---

## License

This project is available under the MIT License. Add a LICENSE file to include the full text.

---

Built with care by Samavia-siddiqui — enjoy showcasing your imagery! ✨
