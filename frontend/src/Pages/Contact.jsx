import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import "./Contact.css";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:8000").replace(/\/+$/, "");

// Feather / Lucide styled SVG icons for GitHub & LinkedIn
function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        let errorMsg = "Failed to send message. Please try again.";
        if (data && typeof data === "object") {
          const firstKey = Object.keys(data)[0];
          const val = data[firstKey];
          if (Array.isArray(val) && val.length > 0) {
            errorMsg = `${firstKey}: ${val[0]}`;
          } else if (typeof val === "string") {
            errorMsg = val;
          }
        }
        throw new Error(errorMsg);
      }

      setStatus({
        loading: false,
        success: "Thank you! Your message has been sent successfully.",
        error: null
      });
      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      const message =
        err.name === "TypeError"
          ? "Cannot connect to server. Please ensure the Django backend is running."
          : err.message || "An unexpected error occurred.";
      setStatus({
        loading: false,
        success: null,
        error: message
      });
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>Let's Work <span>Together</span></h2>
          <p>
            Have a project idea or an opportunity? Feel free to
            contact me. I'd be happy to connect with you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-info-description">
              Reach out for software development opportunities,
              collaborations, or professional discussions.
            </p>

            <a
              href="mailto:sharan2003murali@gmail.com"
              className="contact-info-item"
            >
              <span className="contact-info-icon">
                <Mail size={21} />
              </span>
              <span>
                <small>Email</small>
                <strong>sharan2003murali@gmail.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={21} />
              </span>
              <span>
                <small>Location</small>
                <strong>Chennai, India</strong>
              </span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Shar-200308"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/sharan-m-30b5492a4/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.success && (
              <div className="contact-status contact-status-success">
                <CheckCircle2 size={18} />
                <span>{status.success}</span>
              </div>
            )}

            {status.error && (
              <div className="contact-status contact-status-error">
                <AlertCircle size={18} />
                <span>{status.error}</span>
              </div>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  Sending... <Loader2 size={17} className="contact-spin" />
                </>
              ) : (
                <>
                  Send Message <Send size={17} />
                </>
              )}
            </button>

            <p className="contact-form-note">
              Your message will be delivered directly to my inbox.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
