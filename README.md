🌿 KBR Organics — Full-Stack Web Application
React + Vite + Express.js + MongoDB

A scalable, production-ready full-stack application built for managing and showcasing organic products.
This repository includes both frontend and backend, fully structured for modern development workflows.

🔥 Features

Modern SPA Frontend built with React + Vite

RESTful Backend API powered by Express.js

MongoDB + Mongoose for high-performance data modeling

Modular & Scalable Folder Structure

Environment-based configuration

Easy local development setup

API-ready for authentication & product management

🛠️ Tech Stack
Frontend

React.js

Vite

TailwindCSS / CSS Modules

Axios

React Router

Backend

Node.js

Express.js

Mongoose

dotenv

CORS

JSON Web Tokens (optional authentication setup)

📁 Project Structure
KBR-Organics/
│
├── kbr-organics-frontend/     # React + Vite frontend
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── kbr-organics-backend/      # Express + MongoDB backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/kbr-organics.git
cd kbr-organics

⚙️ Backend Setup
cd kbr-organics-backend
npm install
npm run dev


Backend default URL:
http://localhost:5000

Backend Environment (.env)
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret

🎨 Frontend Setup
cd kbr-organics-frontend
npm install
npm run dev


Frontend default URL:
http://localhost:5173

Frontend Environment (.env)
VITE_API_URL=http://localhost:5000

📡 API Endpoints Overview
Method	Endpoint	Description
GET	/api/products	Fetch all products
POST	/api/products	Add a new product
PUT	/api/products/:id	Update product details
DELETE	/api/products/:id	Delete a product
🧩 Build & Deployment
Frontend Production Build
npm run build

Backend Production Start
npm start


Supports deployment on:

Vercel (Frontend)

Render / Railway / AWS EC2 (Backend)

MongoDB Atlas (Database)
