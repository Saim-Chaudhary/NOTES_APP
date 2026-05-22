# Notes App

Simple MERN notes app with Express + MongoDB backend and React frontend.


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
