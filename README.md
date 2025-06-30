# VAULT-front - Automated Knowledge Base

An Astro.js-powered web application that automatically displays content from THE-VAULT repository. This application serves as a dynamic front-end for my knowledge base, automatically syncing and displaying pages whenever content is pushed to THE-VAULT.

## 🔄 How It Works

This application uses GitHub Actions to automatically:

1. Monitor THE-VAULT repository for new commits
2. Transfer content to `./src/content/posts/`
3. Build and deploy the updated site
4. Display your vault content as web pages

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── BlogIndex.astro
│   ├── content/
│   │   └── posts/         # Auto-synced content from THE-VAULT
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## ⚙️ Configuration

### Repositories

- Source repository: `genocidalfruit/THE-VAULT`
- Frontend repository: `genocidalfruit/VAULT-front`

### GitHub Actions Configuration

The workflow automatically excludes:

- Files/folders starting with a dot (`.git`, `.gitignore`, etc.)
- `README.md`
- `TAGS/` directory
- `RESOURCES/` directory
- `Rough Notes/` directory

## 📁 Content Structure

Content from THE-VAULT is automatically placed in `./src/content/posts/` and can be accessed by Astro's content collections system. The vault's folder structure is preserved in the web application.

## 🌐 Live Site

Visit the live knowledge base at: (https://vault-front.netlify.app/)
