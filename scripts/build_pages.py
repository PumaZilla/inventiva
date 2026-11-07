"""Package the editable game in dist/ for GitHub Pages at capitulo1/."""
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "_site"

if not (ROOT / "dist" / "index.html").is_file():
    raise SystemExit("Falta dist/index.html")

OUTPUT.mkdir(exist_ok=True)
chapter = OUTPUT / "capitulo1"
if chapter.exists():
    shutil.rmtree(chapter)
chapter.mkdir()
sources = [p for p in (ROOT / "dist").iterdir() if p.is_file()]
text = "\n".join(p.read_text() for p in sources if p.suffix in {".js", ".css", ".html"})
# Includes filenames in JS template expressions as well as ordinary asset URLs.
referenced = set(re.findall(r"[A-Za-z0-9_-]+\.(?:png|svg|webp|jpg|jpeg|woff2?)", text))
for source in sources:
    shutil.copy2(source, chapter / source.name)
(chapter / "assets").mkdir()
for asset in (ROOT / "dist" / "assets").iterdir():
    if asset.is_file() and asset.name in referenced:
        shutil.copy2(asset, chapter / "assets" / asset.name)
shutil.copy2(ROOT / "index.html", OUTPUT / "index.html")
(OUTPUT / ".nojekyll").touch()
print(f"GitHub Pages: {OUTPUT} (juego en /capitulo1/)")
