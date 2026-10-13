"""Rebuild index.html from the numbered section files. Run: python3 build.py"""

from pathlib import Path

ROOT = Path(__file__).resolve().parent
sections = sorted((ROOT / "sections").glob("[0-9][0-9]-*.html"))
if not sections:
    raise SystemExit("No section files found in sections/")

head = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ultra Matte Dry Touch Sunscreen — Re'equil</title>
  <link href="assets/reddit-sans.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
</head>
<body>
"""
body = "".join(path.read_text(encoding="utf-8") for path in sections)
tail = '  <script src="js/main.js"></script>\n</body>\n</html>\n'
(ROOT / "index.html").write_text(head + body + tail, encoding="utf-8")
print(f"Built index.html from {len(sections)} sections")
