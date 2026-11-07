"""Package the editable game in dist/ for GitHub Pages at capitulo1/."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "_site"

if not (ROOT / "dist" / "index.html").is_file():
    raise SystemExit("Falta dist/index.html")

OUTPUT.mkdir(exist_ok=True)
shutil.copytree(ROOT / "dist", OUTPUT / "capitulo1", dirs_exist_ok=True)
shutil.copy2(ROOT / "index.html", OUTPUT / "index.html")
(OUTPUT / ".nojekyll").touch()
print(f"GitHub Pages: {OUTPUT} (juego en /capitulo1/)")
