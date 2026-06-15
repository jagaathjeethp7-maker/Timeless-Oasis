import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      {/* Header */}
      <div className="contact__header">
        <div className="contact__header-bg">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=75" alt="Contact" />
          <div className="contact__header-overlay" />
        </div>
        <div className="container contact__header-content">
          <motion.p
            className="contact__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We'd Love to Hear From You
          </motion.h1>
        </div>
      </div>

      <div className="container contact__body">
        <div className="contact__grid">
          {/* Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Say Hello</h2>
            <p className="contact__intro">
              Have a question about a product? A suggestion for something we should feature?
              Or just want to share how you styled your space? We love hearing from our community.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon"><Mail size={20} /></div>
                <div>
                  <p className="contact__info-label">Email Us</p>
                  <p className="contact__info-value">hello@timelessoasis.com</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><Clock size={20} /></div>
                <div>
                  <p className="contact__info-label">Response Time</p>
                  <p className="contact__info-value">Within 24–48 hours</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><MapPin size={20} /></div>
                <div>
                  <p className="contact__info-label">Based In</p>
                  <p className="contact__info-value">Worldwide — We're Fully Online</p>
                </div>
              </div>
            </div>

            <div className="contact__note">
              <h4>A Quick Note</h4>
              <p>
                Timeless Oasis is a curated showcase — we don't handle purchases directly.
                For order inquiries, please contact the retailer through the product link provided.
                We're here for everything else!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24–48 hours.</p>
                <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Product suggestion, general inquiry..."
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
