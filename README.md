# Bakang Radithobane Portfolio

A static React portfolio built with Vite and Tailwind CSS. It has no server, database or paid runtime dependency. The production build is emitted to `dist/` and is ready for Azure Static Web Apps.

## Run locally

Requirements: Node.js 22.13.0 or newer.

```powershell
npm ci
npm run dev
```

Create and preview a production build:

```powershell
npm run build
npm run preview
```

## Update Tech Notes

The Notes link opens `/notes`. Its cards are maintained in [`src/content/techNotes.ts`](src/content/techNotes.ts).

1. Add or edit a card in `techNotes`. Use a unique `slug` and keep `featured: true` on only one card.
2. Put the cover image in `public/` and set `image` to its root-relative path, such as `/tech-note-example.jpg`. Include descriptive `imageAlt` text and credit the source in `photoCredit` and `photoUrl`.
3. Run `npm run build`, then `npm run preview` and open `/notes` to check the card and cover image.

The page currently displays story summaries. Newsletter sign-up is disabled and does not collect email addresses.

## Upload to GitHub

Create an empty repository on GitHub, then run these commands in this folder. Replace the example URL with your repository URL.

```powershell
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not commit `node_modules/` or `dist/`; both are handled by `.gitignore`. Azure builds the site from the source files.

## Deploy with Azure Static Web Apps Free

1. In the Azure portal, create a **Static Web App**.
2. Select the **Free** hosting plan and choose **GitHub** as the deployment source.
3. Authorize GitHub and select the repository and `main` branch.
4. Choose **Custom** as the build preset.
5. Use these build settings:
   - App location: `/`
   - API location: leave blank
   - Output location: `dist`
   - Build command: `npm run build`
6. Create the resource. Azure adds a GitHub Actions workflow to the repository and deploys the site.

The included `public/staticwebapp.config.json` supplies the single-page-app fallback and basic security headers. Vite copies it into `dist/` during the build.

## Custom domain

After the first Azure deployment succeeds, open the Static Web App resource and add the domain under **Custom domains**. Follow Azure's DNS instructions for either the root domain or a subdomain. Add an absolute `og:image` URL to `index.html` after the final domain is known if you want a large social-sharing preview.
