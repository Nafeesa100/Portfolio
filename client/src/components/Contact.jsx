import { useRef, useState } from 'react'
import './Contact.css'


const API_URL = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState(null) 
  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrMsg('')

    const formData = new FormData(formRef.current)
    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
        setErrMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrMsg('Network error. Please email me directly.')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">

        {/* LEFT INFO */}
        <div className="contact-info reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's <em>connect</em></h2>
          <div className="section-line" />
          <p>
            Whether you have a project idea, an opportunity, or just want to say hello —
            my inbox is always open. I'd love to hear from you!
          </p>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-item-text">
              <a href="mailto:naf.dhk2003@gmail.com">naf.dhk2003@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-item-text">
              <a href="https://www.linkedin.com/in/nafeesa110" target="_blank" rel="noreferrer">
                linkedin.com/in/nafeesa110
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🐙</div>
            <div className="contact-item-text">
              <a href="https://github.com/Nafeesa100" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form reveal">
          <h3 className="form-heading">Send a Message ✦</h3>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write a Message" required />
            </div>

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending... ✨' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <div className="form-msg success">
                ✅ Message sent & saved! I will get back to you soon 💙
              </div>
            )}
            {status === 'error' && (
              <div className="form-msg error">
                ❌ {errMsg}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}
