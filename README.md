# GitHub Profile Viewer

A modern React application built with Vite and Tailwind CSS that lets users search for a GitHub username and view profile information in a clean, responsive layout.

## Folder Structure

```text
github-profile-viewer/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ index.css
   ├─ main.jsx
   └─ components/
      ├─ ProfileCard.jsx
      └─ SearchBar.jsx
```

## Tailwind Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Notes

- The app uses the GitHub REST API endpoint: `https://api.github.com/users/{username}`
- It includes loading and error states, plus a dark responsive card UI.
- All styling uses Tailwind utility classes in the React components.
