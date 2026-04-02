# Nafeesa — MERN Stack Portfolio 💙

Full-stack portfolio with React + Vite frontend and Node + Express + MongoDB backend.

---

## 📁 Project Structure

```
nafeesa-portfolio-mern/
├── client/                  ← React + Vite (Frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx/css
│   │   │   ├── Hero.jsx/css
│   │   │   ├── About.jsx/css
│   │   │   ├── Skills.jsx/css
│   │   │   ├── Projects.jsx/css
│   │   │   ├── Achievements.jsx/css
│   │   │   ├── Contact.jsx/css  ← calls backend API
│   │   │   ├── Footer.jsx/css
│   │   │   └── Cursor.jsx/css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── index.html
│   └── vite.config.js       ← proxy to backend in dev
│
└── server/                  ← Node + Express (Backend)
    ├── models/
    │   └── Message.js       ← MongoDB schema
    ├── routes/
    │   └── contact.js       ← POST /api/contact
    ├── .env                 ← MongoDB URI + Gmail creds
    └── server.js            ← main entry
```

---

## ⚡ Setup — Step by Step

### Step 1 — MongoDB Atlas (Free)

1. Go to https://cloud.mongodb.com → Sign up free
2. Create a **free cluster** (M0)
3. Create a **database user** (username + password)
4. Go to **Network Access** → Add IP: `0.0.0.0/0`
5. Go to **Connect** → "Connect your application"
6. Copy the connection string — looks like:
   `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio`

### Step 2 — Gmail App Password

1. Go to **myaccount.google.com**
2. Security → Enable **2-Step Verification**
3. Search "App Passwords" → Generate for "Mail"
4. Copy the **16-digit password** (no spaces)

### Step 3 — Fill .env in server/

Open `server/.env` and fill:
```
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/portfolio
GMAIL_USER=naf.dhk2003@gmail.com
GMAIL_PASS=your16digitapppassword
PORT=5000
```

---

## 🚀 Run Locally

### Terminal 1 — Backend
```bash
cd server
npm install
npm run dev
# Server running on http://localhost:5000
```

### Terminal 2 — Frontend
```bash
cd client
npm install
npm run dev
# React app on http://localhost:5173
```

Open http://localhost:5173 — done! 🎉

---

## 🌐 Deploy (Free)

### Backend → Render.com
1. Push server/ folder to GitHub
2. Go to render.com → New Web Service
3. Connect your repo
4. Add Environment Variables (same as .env)
5. Deploy → get URL like: `https://nafeesa-portfolio-api.onrender.com`

### Frontend → Vercel
1. Push client/ folder to GitHub
2. Go to vercel.com → New Project
3. Add Environment Variable:
   `VITE_API_URL = https://nafeesa-portfolio-api.onrender.com`
4. Deploy → get URL like: `https://nafeesa-portfolio.vercel.app`

---

## 📬 How it works

```
User fills form
     ↓
React sends POST /api/contact
     ↓
Express receives request
     ↓
MongoDB saves message ✅
     +
Nodemailer sends email to naf.dhk2003@gmail.com ✅
     ↓
User sees success message ✅
```
