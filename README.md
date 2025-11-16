<<<<<<< HEAD
# KBR Organics — Frontend & Backend

This repository contains a small React + Vite frontend and an Express + Mongoose backend for a sample organic products app.

Quick start (development)

1. Start backend

```powershell
cd kbr-organics-backend
npm install
npm run dev
```

2. Start frontend (in a new terminal)

```powershell
cd ..\
npm install
npm run dev
```

3. Open the app

```powershell
start 'http://localhost:5173'
```

Notes
- The backend falls back to `sampleProducts.json` when MongoDB is not available so you can preview the frontend without a running DB.
- Health endpoint: `GET /api/health` (returns `mongoState`: `0` = disconnected, `1` = connected).

How to push to GitHub

Option A — using GitHub CLI (recommended if `gh` is installed and authenticated):

```powershell
# from repository root
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin --push
```

Option B — manual (create repo on github.com and then):

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

License: MIT (replace or remove as you prefer)
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# E-com-website-
>>>>>>> 2ced4d91ab738ab5351cd56ac324693986efe573
