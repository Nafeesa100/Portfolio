const express = require('express')
const nodemailer = require('nodemailer')
const Message = require('../models/Message')

const router = express.Router()

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  try {
    // 1. Save to MongoDB
    const newMessage = await Message.create({ name, email, subject, message })

    // 2. Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false   // ← yeh line add karo
      }
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,   // email to yourself
      subject: `💌 New Message: ${subject || 'Portfolio Contact'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #5b9ab5;">New Portfolio Message 💙</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || '—'}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p style="background:#f3ede3; padding:12px; border-radius:6px;">${message}</p>
          <p style="color:#999; font-size:12px; margin-top:16px;">Saved in MongoDB ✅ | ID: ${newMessage._id}</p>
        </div>
      `,
    })

    res.status(200).json({ success: true, message: 'Message sent and saved!' })

  } catch (err) {
    console.error('Contact error:', err.message)
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
})

module.exports = router
