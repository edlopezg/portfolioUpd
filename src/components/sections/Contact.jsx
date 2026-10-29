import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FadeIn } from "../motion/Reveal";
import { useSettings } from "../../context/Settings";
import "./Contact.css";

export default function Contact() {
  const { t, profile } = useSettings();
  const c = t.contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          toast.success(
            t.contact.heading === "Hablemos" ? "¡Mensaje enviado con éxito!" : "Message sent successfully!"
          );
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        () => {
          toast.error(
            t.contact.heading === "Hablemos"
              ? "No se pudo enviar el mensaje. Intenta de nuevo más tarde."
              : "Failed to send message. Please try again later."
          );
          setSending(false);
        }
      );
  };

  return (
    <section className="section scroll-margin" id="contact">
      <div className="container contact-wrap">
        <FadeIn>
          <span className="badge">{c.badge}</span>
          <h2 className="heading-lg" style={{ marginTop: 10 }}>
            {c.heading}
          </h2>
          <p className="contact-subtext">{c.subtext}</p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-row">
              <div className="field">
                <label htmlFor="name">{c.name}</label>
                <input id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="email">{c.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">{c.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button className="cta-button" type="submit" disabled={sending}>
              {sending ? c.sending : c.send}
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact-footer">
            <div className="contact-detail">
              <span>{c.location}</span>
              <strong>{t.profile.location}</strong>
            </div>
            <div className="contact-detail">
              <span>{c.email}</span>
              <strong>{profile.email}</strong>
            </div>
            <div className="contact-detail">
              <span>{c.phone}</span>
              <strong>{profile.phone}</strong>
            </div>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. {c.copyright}
        </p>
      </div>
    </section>
  );
}
