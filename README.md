# Minecraft Project Showcase

A static feature-showcase site for a Minecraft project. Plain HTML/CSS/JS — no build step, works directly on GitHub Pages.

## Files

| File | What it does |
|---|---|
| `features.js` | **The only file you normally edit.** Project name, links, and the list of features. |
| `index.html` | Page structure |
| `style.css` | Styling |
| `app.js` | Renders features, filters, search, timeline and pop-up details |
| `images/` | Put feature screenshots here |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Publish on GitHub Pages

1. Create a repository on GitHub (e.g. `my-mod-site`), or use your project's existing repo.
2. Upload all these files to the root of the repo (or to a `/docs` folder).
3. In the repo go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)` (or `/docs`), then **Save**.
5. After a minute your site is live at `https://bakayarouz.github.io/ShowcaseWebsite/`.

## Add a new feature

Open `features.js` and add an entry to the `FEATURES` list:

```js
{
  title: "Netherite Boat",
  date: "2026-10-12",
  category: "Items",
  version: "1.3.1",
  status: "development",       // development | released | beta | planned
  summary: "A boat that floats on lava.",
  details: ["Crafted from a boat + netherite ingot", "Immune to fire"],
  image: "images/netherite-boat.png",   // or "" for no image
  icon: "🚤"                            // shown when there's no image
},
```

Commit and push — the site updates automatically (GitHub caches files for up to 10 minutes, so hard-refresh with Ctrl+Shift+R if you don't see the change). New categories show up as filter buttons on their own, and the timeline groups features by date.

## Preview locally

Just double-click `index.html`. Everything works offline except the Google Fonts.
