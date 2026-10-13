# Re’equil product page — raw HTML

This folder contains the responsive desktop and mobile page as plain HTML, CSS, and JavaScript.

- `sections/` contains one HTML fragment per page section, in display order.
- `css/styles.css` contains the page styles and responsive rules.
- `js/main.js` contains the interactive behavior.
- `assets/` contains local images, icons, and fonts.
- `index.html` is the assembled page to open or serve.

After editing a section, run `python3 build.py` from this folder to update `index.html`.
You can then open `index.html` directly in a browser. No framework or package install is needed.
