# Musa — CV (GitHub Pages)

This repository hosts an attractive online CV with an embedded PDF viewer and download link. Drop in your PDF (`CV_Musa_v3.pdf`) and customize the text (name, contact, sections).

How to use
1. Replace `CV_Musa_v3.pdf` with your PDF (upload to the repository root).
2. Optionally add `avatar.png` (top-left avatar); if missing the layout still works.
3. Edit `index.html` to adjust text, links and sections.
4. Commit and push.

Deploy to GitHub Pages
- Option A (recommended): Push to `main` (or `master`) branch, then Settings → Pages → Source → `main` / root → Save.
- Option B: Put site files in `docs/` folder and set Pages source to `gh-pages` or `main/docs`.

CLI quickstart
```bash
git init
git add .
git commit -m "Add CV site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Notes
- For a custom domain, add `CNAME` with your domain and configure DNS.
- Accessibility: the layout uses semantic headings and link text; test with a screen reader if needed.
- To improve social previews, create a PNG social card and reference it in `index.html` og:image.

Customize
- Colors and layout are in `styles.css`. Tweak gradients, fonts, and spacing to your taste.
- Add animated intro or transitions sparingly for a professional look.

If you want, I can:
- Create a ready-made GitHub repo and push these files (I’ll give commands you can run locally).
- Generate a social preview image or convert the PDF first page to a thumbnail for the page header.
- Customize the design colors, fonts, or layout to match your personal brand — tell me the style or an example URL you like.
