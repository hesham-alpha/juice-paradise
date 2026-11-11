# Juice Paradise — Egyptian Cold-Pressed Juice

A ready-built website template from Draftly (https://www.draftly.space/3d-templates).

## 1. Preview it on your computer

Double-click `Open preview.bat` in this folder. It starts the local web server and opens the site in your browser.
Keep the command window open while viewing. Do not double-click `index.html`; the browser needs the local server
to load the site's modules, 3D canvas, videos and other assets correctly.

You can also start a server manually if needed:

```bash
npx serve .                   # then open the address it prints (usually http://localhost:3000)
# or, if you have Python:
python3 -m http.server 8000   # then open http://localhost:8000
```

## 2. Put it online

Upload the whole folder (keep every file and sub-folder together) to any static host:

- **Netlify:** drag the folder onto app.netlify.com/drop
- **Vercel:** `npx vercel` inside the folder
- **Cloudflare Pages / GitHub Pages / S3:** upload the folder contents as the site root
- **Your own server:** copy the files into the public web folder

Then point your domain at that host. The site is plain HTML, CSS and JavaScript, so no build step or database is needed.

## 3. What is in this folder

| Path | What it is |
| --- | --- |
| `index.html` | Home page (open this first) |
| `shop.html` | Page |
| `subscribe.html` | Page |
| `assets/` | Compiled scripts, styles and fonts (do not rename) |
| `media/` | Photos and videos used by the pages |
| `thumbnail.jpg` | Preview image of the template (safe to delete) |

## 4. Make it yours

- **Easiest: edit it in Draftly.** Open https://www.draftly.space/3d-templates/pulp-parade, click any text or image to change it, ask the AI to rewrite copy,
  change colours or add sections, then publish to a Draftly address or download a fresh ZIP.
- **Swap a photo or video by hand:** replace the file inside `media/` with your own, keeping the same file name
  (use a similar size and format so the layout stays sharp).
- **Page text:** this is a compiled site, so wording lives inside the built files. For anything beyond a few words,
  use the Draftly editor above rather than editing the minified scripts.
- **Page title and description:** edit the `<title>` and `<meta name="description">` tags in each `.html` file.

## 5. Good to know

- Keep the folder structure exactly as shipped; pages load their files by relative path.
- Large videos are in `media/`. If you host on a service with size limits, compress them first.
- Add your own analytics, forms or cookie banner before launching to customers.

## Help

Questions or something not working? Email support@draftly.business and mention the template name (pulp-parade).

