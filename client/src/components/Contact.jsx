import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ⚠️ Yeh 3 values emailjs.com se leni hain
const SERVICE_ID = "service_4gdjxg9"
const TEMPLATE_ID = "template_5ad0pm7"
const PUBLIC_KEY = "ziaeuhdyTO-1vU39Q"

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">

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

        <div className="contact-form reveal">
          <h3 className="form-heading">Send a Message ✦</h3>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="from_name" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="from_email" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required />
            </div>

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending... ✨' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <div className="form-msg success">
                ✅ Message sent! I will get back to you soon 💙
              </div>
            )}
            {status === 'error' && (
              <div className="form-msg error">
                ❌ Something went wrong. Please email me directly!
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}