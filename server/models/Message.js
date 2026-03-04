const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true },
    subject: { type: String, trim: true, default: 'No Subject' },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }   // createdAt, updatedAt automatic
)

module.exports = mongoose.model('Message', messageSchema)
