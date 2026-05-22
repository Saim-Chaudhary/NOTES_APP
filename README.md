# Notes App

MERN notes app with Express + MongoDB backend and React frontend.

## Demo
Use the link below to view or download.

[Recording 2026-05-22 152209](Recording%202026-05-22%20152209.mp4)


## Setup
1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

3. Create backend environment file:
   - Copy `backend/.env.example` to `backend/.env`
   - Add your MongoDB connection string to `MONGO_URI`

## Run the app
1. Start the backend:
   ```bash
   cd backend
   node server.js
   ```

2. Start the frontend (new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

The frontend runs on the Vite dev server and calls the backend at http://localhost:5000.

```
NOTES-APP
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  └─ noteController.js
│  ├─ models
│  │  └─ Note.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ noteRoutes.js
│  └─ server.js
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.svg
│  │  └─ icons.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ hero.png
│  │  │  ├─ react.svg
│  │  │  └─ vite.svg
│  │  ├─ index.css
│  │  └─ main.jsx
│  └─ vite.config.js
└─ README.md

```
