const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const contactRoute = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-portfolio.vercel.app',
  ],
  credentials: true,
}))
app.use(express.json())

// ── Routes ──────────────────────────────────────────────
app.get('/', (req, res) => res.json({ message: 'Nafeesa Portfolio API running ✅' }))
app.use('/api/contact', contactRoute)

// ── MongoDB + Start Server ───────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
  })
  .catch((err) => console.error('❌ MongoDB error:', err.message))
