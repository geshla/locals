# Levi's Lot Archive

A static site (no build step) cataloguing Levi's jeans: Red Tab lot numbers, Orange Tab, Levi's Vintage Clothing reissues, premium lines (Silver Tab, Engineered Jeans, RED, Made & Crafted, Blue Tab) and collaborations.

## Files
- `index.html` – page shell
- `styles.css` – styling (light and dark mode)
- `app.js` – timeline, model index, filters, search, fit drawings, detail view
- `data.js` – **all content lives here**
- `images/` – your own photos, one folder per entry id

## Publish on GitHub Pages
1. Create a repo (e.g. `levis-archive`) and push these files to the `main` branch.
2. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. The site appears at `https://geshla.github.io/levis-archive/`.

## Adding photos
Only add photos you took yourself or have permission to use.
1. Save the image as `images/<entry-id>/front.jpg` (the id is shown in the "Your photos" box of each entry).
2. In `data.js`, add it to that entry:
   ```js
   photos: [{ src: "images/lvc-1947-501/front.jpg", caption: "Front, raw", credit: "Tim" }]
   ```

## Adding a model
Copy any entry in `ENTRIES`, give it a new `id`, pick a `line` and a `fit` preset from `FITS`. Set `approx: true` if the year isn't confirmed. Each entry can be linked directly with `#/<id>` on the URL.

## Filters
Click a line chip to hide or show it; Alt/Cmd-click shows only that line. The chosen lines are remembered in the browser.
